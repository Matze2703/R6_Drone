#include <PS4Controller.h>


void setup() {
  PS4.begin("B4:E6:2D:8D:C4:53");
  Serial.begin(115200);

  
  pinMode(26, OUTPUT); //Y (DIR)
  pinMode(27, OUTPUT); //O (STEP)
  pinMode(12, OUTPUT); //Y (DIR)
  pinMode(14, OUTPUT); //O (STEP)
}

void loop() {
  if (PS4.isConnected()) {
    
    digitalWrite(27, LOW);
    digitalWrite(14, LOW);
    
    // Vorwärts
    if (PS4.R2()) {
      digitalWrite(27, HIGH);
      digitalWrite(14, HIGH);
      // Richtungen der Motoren umschalten
      digitalWrite(26, HIGH);
      digitalWrite(12, LOW);
    }

    //Rückwärts
    else if (PS4.L2()) {
      digitalWrite(27, HIGH);
      digitalWrite(14, HIGH);
      // Richtungen der Motoren umschalten
      digitalWrite(26, LOW);
      digitalWrite(12, HIGH);
    }

    // Kein Controllerinput
    else{
       
    }
    
    //Kurze Pause für Steps
    delay(1);
  }
}
