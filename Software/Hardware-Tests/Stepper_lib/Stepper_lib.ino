#include <AccelStepper.h>

const int stepPin_1 = 27;
const int dirPin_1 = 26;
const int stepPin_2 = 12;
const int dirPin_2 = 14;

AccelStepper stepper_1(1, stepPin_1, dirPin_1);
AccelStepper stepper_2(1, stepPin_2, dirPin_2);

unsigned long previousMillis = 0;
const long interval = 1000; // 1 Sekunde
int motorspeed = 100; // Startgeschwindigkeit
bool increasing = true; // Steuerung: Steigt oder sinkt die Geschwindigkeit?

void setup() {
  pinMode(dirPin_1, OUTPUT);
  pinMode(stepPin_1, OUTPUT);
  pinMode(dirPin_2, OUTPUT);
  pinMode(stepPin_2, OUTPUT);
  
  Serial.begin(115200);
  stepper_1.setAcceleration(1000);
  stepper_1.setMaxSpeed(1000); // Oberes Limit bleibt fix
  stepper_1.setSpeed(motorspeed); // Anfangsgeschwindigkeit
  stepper_2.setAcceleration(1000);
  stepper_2.setMaxSpeed(1000); // Oberes Limit bleibt fix
  stepper_2.setSpeed(motorspeed); // Anfangsgeschwindigkeit Motor 2
}

void loop() {

  // Zeitbasierte Aktualisierung der Geschwindigkeit
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis; // Zeitstempel aktualisieren

    if (increasing) {
      motorspeed += 100;
      if (motorspeed >= 1000) {
        motorspeed = 1000;
        increasing = false; // Geschwindigkeit verringern
      }
    } else {
      motorspeed -= 100;
      if (motorspeed <= 100) {
        motorspeed = 100;
        increasing = true; // Geschwindigkeit erhöhen
      }
    }

    stepper_1.setSpeed(motorspeed); // Geschwindigkeit anpassen
    stepper_2.setSpeed(motorspeed); // Geschwindigkeit Motor 2
    Serial.print("Neue Geschwindigkeit: ");
    Serial.println(motorspeed);
  }

  // Ständiges Aufrufen von runSpeed(), damit die Motoren nicht stoppen
  // runSpeed IMMER erst nach setSpeed aufrufen
  stepper_1.runSpeed(); 
  stepper_2.runSpeed();
}
