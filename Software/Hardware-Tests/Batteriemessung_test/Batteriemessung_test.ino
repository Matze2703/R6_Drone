void setup() {
  pinMode(4,INPUT_PULLDOWN);
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(4));
  
  //NETZGERÄT
  //2400 MAX
  //2250 MIN

  //AKKU
  //~850 MAX
  //750 MIN
  
}
