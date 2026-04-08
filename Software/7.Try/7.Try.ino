#include "esp_camera.h"
#include <WiFi.h>
#include <esp_now.h>
#include <FastAccelStepper.h>
#include <Adafruit_NeoPixel.h>


// ========
// Neopixel
// ========
#define PIN_NEO_PIXEL  2  // The ESP32 pin connected to NeoPixel
#define NUM_PIXELS     8  // The number of LEDs (pixels) on NeoPixel
Adafruit_NeoPixel LED(NUM_PIXELS, PIN_NEO_PIXEL, NEO_GRB + NEO_KHZ800);


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
//void setupLedFlash(int pin);


// Stepper Settings
const int stepPin_1 = 33;
const int dirPin_1 = 32;
const int stepPin_2 = 12;
const int dirPin_2 = 14;

FastAccelStepperEngine engine = FastAccelStepperEngine();
FastAccelStepper *stepper_1 = NULL;
FastAccelStepper *stepper_2 = NULL;

const int acceleration = 1000;
const int max_speed = 10000;


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

volatile int targetSpeedLeft = 999;
volatile int targetSpeedRight = 999;

TaskHandle_t stepperTaskHandle;

// Daten empfangen und ausgeben
void OnDataRecv(const esp_now_recv_info_t *info, const uint8_t *incoming, int len) {
  memcpy(&incomingData, incoming, sizeof(incomingData));
  
  
  Serial.print("Daten empfangen auf Core: ");
  Serial.println(xPortGetCoreID());
  /*
  char macStr[18];
  snprintf(macStr, sizeof(macStr),
           "%02X:%02X:%02X:%02X:%02X:%02X",
           info->src_addr[0], info->src_addr[1], info->src_addr[2],
           info->src_addr[3], info->src_addr[4], info->src_addr[5]);
  */
  
  
  /*
  if (abs(incomingData.ly) > 10) {
    // FastAccelStepper nutzt Hz (Schritte pro Sekunde)
    targetSpeedLeft = map(incomingData.ly, -127, 127, -5000, 5000);
  } else {
    targetSpeed = 0;
  }
  */
  
}



//================
//Motorensteuerung
//================
void stepperTask(void * parameter) {
  for(;;) {
    // Da FastAccelStepper Hardware-Interrupts nutzt, müssen wir 
    // hier nur die Geschwindigkeit setzen, wenn sie sich ändert.
    
    // Einfachere Methode für kontinuierliche Fahrt:
    stepper_1->setSpeedInHz(abs(targetSpeedLeft));
    if (targetSpeedLeft > 0) stepper_1->runForward();
    else if (targetSpeedLeft < 0) stepper_1->runBackward();
    else stepper_1->stopMove();

    stepper_2->setSpeedInHz(abs(targetSpeedRight));
    if (targetSpeedRight > 0) stepper_2->runForward();
    else if (targetSpeedRight < 0) stepper_2->runBackward();
    else stepper_2->stopMove();

    // Bei FastAccelStepper ist vTaskDelay sinnvoll, da die Hardware die Pulse schickt
    vTaskDelay(pdMS_TO_TICKS(20));
  }
}




// =====
// DEBUG
// =====
#include "driver/ledc.h"

void checkTimerResources() {
    Serial.println("\n--- Hardware Timer Status (LEDC) ---");
    for (int i = 0; i < LEDC_TIMER_MAX; i++) {
        // Prüfen, ob der Timer konfiguriert ist
        // Es gibt keine direkte "is_used" Funktion, aber wir können die Frequenz prüfen
        uint32_t freq = ledc_get_freq(LEDC_LOW_SPEED_MODE, (ledc_timer_t)i);
        if (freq > 0) {
            Serial.printf("Timer [%d]: AKTIV mit %d Hz\n", i, freq);
        } else {
            Serial.printf("Timer [%d]: Frei oder nicht via LEDC konfiguriert\n", i);
        }
    }
    Serial.println("------------------------------------\n");
}



void setup() {
  //LEDs
  LED.begin();
  LED.setBrightness(100); // a value from 0 to 255
  LED.setPixelColor(7, LED.Color(252,233,3));
  LED.show();
  delay(1000);
  
  //Serial Debug
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  // FastAccelStepper Init
  engine.init();
  stepper_1 = engine.stepperConnectToPin(stepPin_1);
  if (stepper_1) {
    stepper_1->setDirectionPin(dirPin_1);
    stepper_1->setAcceleration(acceleration);
  }
  
  stepper_2 = engine.stepperConnectToPin(stepPin_2);
  if (stepper_2) {
    stepper_2->setDirectionPin(dirPin_2);
    stepper_2->setAcceleration(acceleration);
  }

  //Camera
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_2;
  config.ledc_timer = LEDC_TIMER_1;
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

  //DEBUG
  checkTimerResources();
  
  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    LED.setPixelColor(7, LED.Color(255,0,0));
    LED.show();
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
    LED.setPixelColor(7, LED.Color(255,0,0));
    LED.show();
    return;
  }
  
  
  
  //esp_now_register_recv_cb(OnDataRecv);
  //Serial.println("Warte auf PS4-Daten...");
  
  LED.setPixelColor(7, LED.Color(0,0,255));
  LED.show();


  // Motorsteuerungsthread auf Core 1 starten
  xTaskCreatePinnedToCore(
    stepperTask,          // Funktion
    "StepperTask",        // Name
    4096,                 // Stack size
    NULL,
    5,                    // Priorität
    &stepperTaskHandle,
    1                     // Core 1!
  );
}


void loop() {
  // Core 0 ist mit WiFi/Webserver/ESP-NOW beschäftigt
  vTaskDelay(pdMS_TO_TICKS(10000));
  checkTimerResources();
}
