//Librarys und HTTP
#include <WiFi.h>
#include "esp_camera.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"
#include "esp_http_server.h"
#include <driver/i2s.h>
#include "esp_intr_alloc.h"
//#include "app_httpd.h"


// Kamera-Pin-Konfiguration für ESP-WROVER
#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      21
#define SIOD_GPIO_NUM      26
#define SIOC_GPIO_NUM      27

#define Y9_GPIO_NUM        35
#define Y8_GPIO_NUM        34
#define Y7_GPIO_NUM        39
#define Y6_GPIO_NUM        36
#define Y5_GPIO_NUM        19
#define Y4_GPIO_NUM        18
#define Y3_GPIO_NUM         5
#define Y2_GPIO_NUM         4
#define VSYNC_GPIO_NUM     25
#define HREF_GPIO_NUM      23
#define PCLK_GPIO_NUM      22

// Mikrofon-Pin-Konfiguration (INMP441)
#define I2S_WS 13   // L/R Clock
#define I2S_SD 32   // Data
#define I2S_SCK 14  // Bit Clock

// WLAN Accesspoint einrichten
const char *ssid = "ESP-Cam-AP";
const char *password = "12345678";


// Zugriff auf Serverstart?
httpd_handle_t server = NULL;

// definieren, damit es aufgerufen werden kann
void startCameraServer();

//Wieder auskommentieren wenn Audio geht
//void send_wav_header(httpd_req_t *req, uint32_t sample_rate, uint16_t bits_per_sample, uint16_t channels); 
//esp_err_t wav_audio_handler(httpd_req_t *req);


void printMessage(const char* message){
  Serial.println(message);  // Ausgabe über Serial
}



//---------------------
// Audio initialisieren
//---------------------
void initialize_I2S_Audio() {
    
    // Mikrofoneinstellungen
    i2s_config_t i2s_config = {
        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
        .sample_rate = 16000,
        .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
        .communication_format = I2S_COMM_FORMAT_I2S,
        .intr_alloc_flags = ESP_INTR_FLAG_LEVEL2 | ESP_INTR_FLAG_SHARED, // Interrupt-Level 2 in Kombination mit Shared-Interrupt verwenden
        .dma_buf_count = 8,
        .dma_buf_len = 1024,
        .use_apll = true
    };

    // Hardware-Pin-Belegung des Mikrofons
    i2s_pin_config_t pin_config = {
        .bck_io_num = I2S_SCK,
        .ws_io_num = I2S_WS,
        .data_out_num = I2S_PIN_NO_CHANGE,
        .data_in_num = I2S_SD
    };

    // Mikrofon initialisieren
    esp_err_t err;
    int retries = 5;
    while ((err = i2s_driver_install(I2S_NUM_0, &i2s_config, 0, NULL)) != ESP_OK && retries > 0) {
        Serial.printf("I2S-Treiber konnte nicht installiert werden (Fehler 0x%x), verbleibende Versuche: %d\n", err, retries);
        retries--;
        delay(3000);
    }
    if (err != ESP_OK) {
        Serial.println("Fehler: I2S konnte nach mehreren Versuchen nicht initialisiert werden.");
        return;
    }
    i2s_set_pin(I2S_NUM_0, &pin_config);
    Serial.println("I2S initialisiert!");
}






void setup() {

    WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); // Brownout-Detektor deaktivieren
    Serial.begin(115200);

    // Kamera-Konfiguration (camera_pins.h vielleicht überflüssig)
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
    config.pin_sscb_sda = SIOD_GPIO_NUM;
    config.pin_sscb_scl = SIOC_GPIO_NUM;
    config.pin_pwdn = PWDN_GPIO_NUM;
    config.pin_reset = RESET_GPIO_NUM;
    config.xclk_freq_hz = 20000000;
    config.pixel_format = PIXFORMAT_JPEG;

    // auf PSRAM prüfen und wenn vorhanden verwenden (KAMERA) 
    if (psramFound()) {
      config.jpeg_quality = 12;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Frame size limitieren wenn kein PSRAM vorhanden
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
      config.fb_count = 1;  // Nur ein Frame-Puffer ohne PSRAM
    }

    
    // Kamera auf Core 0 initialisieren
    esp_err_t err = esp_camera_init(&config);
    while (err != ESP_OK) {
         Serial.printf("Kamera-Initialisierung fehlgeschlagen: %s (Fehler 0x%x)\n", esp_err_to_name(err), err);
        delay(3000);
    }
    Serial.printf("\n\nKamera initialisiert!");
    Serial.printf("\nKamera läuft auf Core %d", xPortGetCoreID());

    
    // WLAN initialisieren
    WiFi.softAP(ssid, password);
    Serial.println("\nWLAN Access Point gestartet!");

    
    // Mikrofon auf Core 1 initialisieren
    xTaskCreatePinnedToCore([](void* param) {
        initialize_I2S_Audio();
        i2s_start(I2S_NUM_0);
        Serial.printf("I2S läuft auf Core %d\n", xPortGetCoreID());
        vTaskDelete(NULL);
    }, "AudioInit", 4096, NULL, 1, NULL, 0); // Der letzte Parameter bestimmt den Core

    // Server starten
    startCameraServer();

    // Interrupts ansehen (DEBUG)
    esp_intr_dump(stdout);
}



void loop() {
    delay(10000);
    
}
