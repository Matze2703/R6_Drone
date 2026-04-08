#include <esp_now.h>
#include <PS4Controller.h>
#include "esp_wifi.h"
#include <WiFi.h>

// MAC-Adresse vom Empfänger-ESP32
uint8_t receiverMAC[] = {0xB4, 0xE6, 0x2D, 0x8D, 0xC4, 0x52};

struct PS4Data {
  int8_t rx;
  int8_t ly;
  bool cross;
};


void sendData() {
  PS4Data msg;
  msg.rx = PS4.data.analog.stick.rx;
  msg.ly = PS4.data.analog.stick.ly;
  msg.cross = PS4.data.button.cross;

  esp_err_t result = esp_now_send(receiverMAC, (uint8_t *)&msg, sizeof(msg));
  if (result == ESP_OK) {
    Serial.println("Daten gesendet!");
  } else {
    Serial.printf("Fehler beim Senden: %d\n", result);
  }
}


void setup() {
  Serial.begin(115200);  

  // Wichtig: ESP-NOW benötigt STA oder AP_STA Mode
  WiFi.mode(WIFI_STA);
  esp_wifi_start();
  esp_wifi_set_promiscuous(true);
  esp_wifi_set_channel(1, WIFI_SECOND_CHAN_NONE);  // Gleicher Kanal wie Empfänger
  esp_wifi_set_promiscuous(false);
  WiFi.disconnect(); // optional – um sicherzustellen, dass nichts stört
  
  if (esp_now_init() != ESP_OK) {
    Serial.println("ESP-NOW Init failed");
    return;
  }

  esp_now_peer_info_t peerInfo = {};
  memcpy(peerInfo.peer_addr, receiverMAC, 6);
  peerInfo.channel = 1;
  peerInfo.encrypt = false;

  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("Failed to add peer");
    return;
  }

  PS4.begin("C8:C9:A3:C7:14:86");
  
  Serial.println("Ready");
}

void loop() {
  if (PS4.isConnected()) {
    sendData();
    Serial.print("RX: ");
    Serial.println(PS4.data.analog.stick.rx);
    Serial.print("LY: ");
    Serial.println(PS4.data.analog.stick.ly);
    Serial.print("Akkustand: ");
    if (PS4.Battery() == 7){
      Serial.println("am Laden");
    }
    else{
      Serial.print(PS4.Battery());
      Serial.println(" von 6");
    }
    
    delay(5);
  } else {
    delay(200);
  }
}
