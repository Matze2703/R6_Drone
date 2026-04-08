#include <Adafruit_NeoPixel.h>

#define PIN_NEO_PIXEL  2  // The ESP32 pin connected to NeoPixel
#define NUM_PIXELS     8  // The number of LEDs (pixels) on NeoPixel

Adafruit_NeoPixel stripe(NUM_PIXELS, PIN_NEO_PIXEL, NEO_GRB + NEO_KHZ800);


void setup() {
  stripe.begin();
  stripe.setBrightness(150); // a value from 0 to 255
  Serial.begin(115200);
}

void loop() {
  for (int pixel = 0; pixel < NUM_PIXELS/2; pixel++) {
    stripe.setPixelColor((NUM_PIXELS/2-pixel-1), stripe.Color(255,0,0));
    stripe.setPixelColor((pixel+(NUM_PIXELS/2)), stripe.Color(255,0,0));
    stripe.show();
    delay(100);
  }

  for (int pixel = 0; pixel < (NUM_PIXELS/2); pixel++){
    stripe.setPixelColor((NUM_PIXELS - pixel-1), stripe.Color(0,0,0));
    stripe.setPixelColor(pixel, stripe.Color(0,0,0));
    stripe.show();
    Serial.println(pixel);
    Serial.println((NUM_PIXELS - pixel-1));
    delay(100);
  }
}
