#include <WiFi.h>
#include <esp_now.h>


// ==================
// WLAN Einstellungen
// ==================
const char *ssid = "ESP-CAM";
const char *password = "12345678";
IPAddress local_ip(192, 168, 4, 1);       // feste IP für den AP
IPAddress gateway(192, 168, 4, 1);
IPAddress subnet(255, 255, 255, 0);



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
}





void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  WiFi.softAPConfig(local_ip, gateway, subnet);  // IP-Konfiguration
  WiFi.softAP(ssid, password, 1);  // AP mit Kanal 1 starten
  Serial.print("WLAN Access Point gestartet unter: ");
  Serial.println(WiFi.softAPIP());               // Gibt die IP-Adresse aus
  Serial.print("MAC: ");
  Serial.println(WiFi.softAPmacAddress());
  WiFi.setSleep(false);

  if (esp_now_init() != ESP_OK) {
    Serial.println("ESP-NOW Init failed");
    return;
  }
  esp_now_register_recv_cb(OnDataRecv);
  Serial.println("Warte auf PS4-Daten...");
}



void loop() {
  // Do nothing. Everything is done in another task by the web server
  delay(10000);
}
