#include "esp_camera.h"
#include <WiFi.h>
#include <esp_now.h>
#include <AccelStepper.h>


// ===================
// Select camera model
// ===================
#define CAMERA_MODEL_WROVER_KIT // Has PSRAM
#include "camera_pins.h"



// ==================
// WiFi settings
// ==================
const char *ssid = "ESP-CAM";
const char *password = "12345678";
IPAddress local_ip(192, 168, 4, 1);       // fixed IP for AP
IPAddress gateway(192, 168, 4, 1);
IPAddress subnet(255, 255, 255, 0);

  
void startCameraServer();
void setupLedFlash(int pin);



const int stepPin_1 = 27;
const int dirPin_1 = 26;
const int stepPin_2 = 14;
const int dirPin_2 = 12;
const int acceleration = 1000;
const int max_speed = 1000;

AccelStepper stepper_1(1, stepPin_1, dirPin_1);
AccelStepper stepper_2(1, stepPin_2, dirPin_2);

// =======
// ESP-NOW
// =======
// Struktur muss exakt zur Senderstruktur passen!
struct PS4Data {
  int8_t rx;
  int8_t ly;
  bool cross;
};


// Empfangenes Datenobjekt
PS4Data incomingData;

// Daten empfangen und ausgeben
void OnDataRecv(const esp_now_recv_info_t *info, const uint8_t *incoming, int len) {
  memcpy(&incomingData, incoming, sizeof(incomingData));

  char macStr[18];
  snprintf(macStr, sizeof(macStr),
           "%02X:%02X:%02X:%02X:%02X:%02X",
           info->src_addr[0], info->src_addr[1], info->src_addr[2],
           info->src_addr[3], info->src_addr[4], info->src_addr[5]);

  Serial.println("Daten empfangen!");
  Serial.print("Von: ");
  Serial.print(macStr);
  Serial.print(" | RX: ");
  Serial.print(incomingData.rx);
  Serial.print(" | LY: ");
  Serial.print(incomingData.ly);
  Serial.print(" | X gedrückt: ");
  Serial.println(incomingData.cross ? "Ja" : "Nein");

  //================
  //Motorensteuerung
  //================
  
  // Ständiges Aufrufen von runSpeed() nötig, damit Motoren nicht stocken
  stepper_1.runSpeed(); 
  stepper_2.runSpeed();
  
  // Vorwärts & Rückwärts
  if (abs(incomingData.ly) > 10) {  //Totzone von -10 bis 10
    Serial.println("Fahren");
    stepper_1.setSpeed(map(incomingData.ly, -127, 127, -1000, 1000));
    stepper_2.setSpeed(map(incomingData.ly, -127, 127, -1000, 1000));
  }

  // Kein Input
  else{
    stepper_1.setSpeed(0);
    stepper_2.setSpeed(0);
  }
  
}



void setup() {
  //Serial Debug
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  //Stepper
  pinMode(dirPin_1, OUTPUT);
  pinMode(stepPin_1, OUTPUT);
  pinMode(dirPin_2, OUTPUT);
  pinMode(stepPin_2, OUTPUT);
  stepper_1.setAcceleration(acceleration);
  stepper_1.setMaxSpeed(max_speed); // Oberes Limit bleibt fix
  stepper_2.setMaxSpeed(max_speed); // Oberes Limit bleibt fix

  //Camera
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 4;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  }


  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // flip it back
    s->set_brightness(s, 1);   // up the brightness just a bit
    s->set_saturation(s, -2);  // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  //====
  //WiFi
  //====
  WiFi.softAPConfig(local_ip, gateway, subnet);  // IP-config
  WiFi.softAP(ssid, password);                   // start AP
  Serial.println("WLAN Access Point gestartet!");
  Serial.print("Stream öffnen unter: ");
  Serial.println(WiFi.softAPIP());
  WiFi.setSleep(false);

  startCameraServer();


  //=====================
  // ESP-NOW (Controller)
  //=====================
  if (esp_now_init() != ESP_OK) {
    Serial.println("ESP-NOW Init failed");
    return;
  }
  esp_now_register_recv_cb(OnDataRecv);
  Serial.println("Warte auf PS4-Daten...");
}

void loop() {
  // Do nothing. Everything is done in another function
  delay(10000);
}
