# pi-WebRTC

A self-hosted WebRTC camera stream for Raspberry Pi using MQTT and nginx.

---

## Table of Contents

- [Update System and Install Dependencies](#update-system-and-install-dependencies)
- [Download the Latest Binary](#download-the-latest-binary)
- [Self-Hosted Stream Setup](#self-hosted-stream-setup)
  - [Install MQTT (Mosquitto)](#install-mqtt-mosquitto)
  - [Configure Mosquitto](#configure-mosquitto)
  - [Create a User and Password](#create-a-user-and-password)
  - [Generate TLS Certificates](#generate-tls-certificates)
- [Set Up the Website (nginx)](#set-up-the-website-nginx)
- [Set Up the Access Point](#set-up-the-access-point)
- [(Optional) Set Up the Microphone](#optional-set-up-the-microphone)
- [Starting the Stream](#starting-the-stream)
- [Troubleshooting](#troubleshooting)

---

## Update System and Install Dependencies

```bash
sudo apt update
sudo apt install libmosquitto1 pulseaudio libavformat61 libswscale8 libyaml-cpp0.8
```

---

## Download the Latest Binary

```bash
wget https://github.com/TzuHuanTai/RaspberryPi-WebRTC/releases/latest/download/pi-webrtc_raspios-trixie-arm64.tar.gz
tar -xzf pi-webrtc_raspios-trixie-arm64.tar.gz
```

---

## Self-Hosted Stream Setup

### Install MQTT (Mosquitto)

```bash
sudo apt install -y mosquitto mosquitto-clients
sudo systemctl enable mosquitto
```

### Configure Mosquitto

Edit the config file at `sudo nano /etc/mosquitto/conf.d/local.conf` and add the following:

```
# Location of password file
password_file /etc/mosquitto/passwd

# MQTT – Pi
listener 1883 127.0.0.1
allow_anonymous false

# WebSocket – Browser
listener 8083
protocol websockets
allow_anonymous false
cafile /etc/mosquitto/certs/ca.crt
certfile /etc/mosquitto/certs/server.crt
keyfile /etc/mosquitto/certs/server.key
```

### Create a User and Password

```bash
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USER
# You will be prompted to enter your new password twice
```

### Generate TLS Certificates

Create the certificates in the folder defined above:

```bash
sudo mkdir -p /etc/mosquitto/certs
cd /etc/mosquitto/certs

sudo openssl genrsa -out ca.key 2048
sudo openssl req -new -x509 -days 3650 -key ca.key -out ca.crt -subj "/CN=MosquittoCA"

sudo openssl genrsa -out server.key 2048
sudo openssl req -new -key server.key -out server.csr -subj "/CN=raspberrypi"

sudo openssl x509 -req -days 3650 -in server.csr \
  -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt

sudo chown -R mosquitto:mosquitto /etc/mosquitto/certs
sudo chmod 600 /etc/mosquitto/certs/*.key
```

Then reboot:

```bash
sudo reboot
```

---

## Set Up the Website (nginx)

### Install nginx

```bash
sudo apt install -y nginx
```

### Add Your Web Files

You can use the [picamera.js demo template](https://tzuhuantai.github.io/picamera.js/demo/) or design your own website. The STUN/TURN server section is not needed for this project.

> **Note:** Use the `picamera.esm.js` file from this repo or modify the original, as the original has a syntax error at line 20452:84 that can be safely removed. Make sure your HTML has the correct import (e.g., line 50 in the template):
> ```js
> import { PiCamera } from '/assets/picamera.esm.js';
> ```

Your file structure should look like this:

```
/var/www/html/
├── index.html
└── assets/
    └── picamera.esm.js
```

Create the folders if they don't exist yet:

```bash
sudo mkdir -p /var/www/html/
sudo mkdir -p /var/www/html/assets
```

### Enable SSL in nginx

To allow connections from your phone over HTTPS, configure nginx with SSL. Run the following to overwrite the default config:

```bash
sudo tee /etc/nginx/sites-available/default > /dev/null << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    listen 443 ssl;
    listen [::]:443 ssl;
    ssl_certificate /etc/mosquitto/certs/server.crt;
    ssl_certificate_key /etc/mosquitto/certs/server.key;
    root /var/www/html;
    index index.html;
    server_name _;
    location / {
        try_files $uri $uri/ =404;
    }
}
EOF
sudo nginx -t && sudo systemctl restart nginx
```

---

## Set Up the Access Point

> **Important:** From this point on, make sure you have everything you need already downloaded, or have an alternative way to connect the Pi to the internet (e.g., Ethernet, SSH file upload). The WiFi interface will be used for the access point.

I was unable to get the access point running with a password, but the stream itself is secured by a password. Here is the setup for an open (no-password) access point:

```bash
sudo nmcli con add type wifi ifname wlan0 con-name PiCamera-AP ssid "YOUR_SSID" \
  mode ap ipv4.method shared ipv4.addresses 192.168.4.1/24
sudo nmcli con up PiCamera-AP
```

Replace `YOUR_SSID` with your desired network name.

---

## (Optional) Set Up the Microphone

### Wiring

Connect your I2S microphone (e.g., Google Voice HAT) to the Raspberry Pi GPIO pins.

### Edit the RPi Config

```bash
sudo nano /boot/firmware/config.txt
```

Add or modify the following lines:

```
dtparam=i2s=on
dtoverlay=googlevoicehat-soundcard
```

Then reboot:

```bash
sudo reboot
```

### Install Additional Libraries

```bash
sudo apt install -y alsa-utils python3-pip
pip3 install pyaudio --break-system-packages
```

### Test the Microphone

List available recording devices:

```bash
arecord -l
```

Expected output should look something like:

```
card 1: sndrpigooglevoi [snd_rpi_googlevoicehat_soundcar], device 0: Google voiceHAT SoundCard HiFi voicehat-hifi-0 [...]
```

Make a short test recording:

```bash
arecord -D dmic_sv -c2 -r 48000 -f S32_LE -t wav -d 3 -V mono test.wav
```

If the volume is too low:

```bash
amixer -c 1 cset numid=1 100%   # numid = number from arecord -l
```

Save the settings:

```bash
sudo alsactl store 1
```

> **Note:** After rebooting, you may need to re-accept the certificate at `https://YOUR.PI.AP.IP:8083`.

---

## Starting the Stream

Start Mosquitto and nginx:

```bash
sudo systemctl start mosquitto
sudo systemctl start nginx
```

Start pi-webrtc:

```bash
./pi-webrtc \
    --camera=libcamera:0 \
    --fps=30 \
    --width=1280 \
    --height=960 \
    --use-mqtt \
    --mqtt-host=127.0.0.1 \
    --mqtt-port=1883 \
    --mqtt-username=YOUR_USER \
    --mqtt-password=YOUR_PWD \
    --uid=YOUR_CUSTOM_UID \
    --hw-accel  # Only Pi Zero 2W, 3B, and 4B support hardware encoding
```

> If you set up the microphone, run this command **without** the `--no-audio` option.

---

## Troubleshooting

### MQTT Startup Loop

If Mosquitto keeps starting and stopping in a loop, there may be a conflict with the password file. Comment out the password file line in the main config:

```bash
sudo nano /etc/mosquitto/mosquitto.conf
# Comment out or remove: password_file /etc/mosquitto/passwd
```

Then fix the file ownership:

```bash
sudo chown mosquitto:mosquitto /etc/mosquitto/passwd
```

### Browser Console Error

If you see an error like:

```
picamera.esm.js:1657 Uncaught (in promise) TypeError: Cannot read properties of undefined
(reading 'getUserMedia') at dr.createlocalAudioStream ...
```

Navigate to `https://YOUR.PI.AP.IP:8083` and accept the self-signed certificate again. If no warning is shown, the certificate is already accepted.

Also make sure you are opening the stream page via **HTTP**, not HTTPS (unless you have configured nginx to serve it over HTTPS as well).
