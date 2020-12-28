# weathersensors <img src="frontend/resources/img/logo.png?" height="30" width="30">

This project was originally developed in the context of the module "Application Development 2" at the FHDW Paderborn (
Releases <1.1.0). After finishing the module, this project was developed further voluntarily (Releases >=1.1.0).

GUI (lightmode) | GUI (darkmode)
:-------------------------:|:-------------------------:
![Screenshot](dokumentation/res/GUI.png)   |  ![Screenshot](dokumentation/res/GUI_darkmode.png)

In the course of this project NodeMCU ESP8266 will be equipped with BME280 sensors (temperature, air pressure and
humidity sensor). These send the collected data to a central server, which manages the data. These data can be retrieved
in visual form via a web server.

### Build Status: ![CI Frontend](https://github.com/JeuJeus/awe2-wettersensoren/workflows/Test%20Frontend/badge.svg) ![Test Backend](https://github.com/JeuJeus/awe2-wettersensoren/workflows/Test%20Backend/badge.svg)

### [Live Version](https://awe2.jeujeus.de)

## Features:

### state 1.0.x :

- collecting weather data from 'n' different sensors
- sensor activity indicator for overview of active sensors
- exact time stamp of last activity for inactive sensors
- selection of the sensor to be plotted
- secure admin interface for the administration of the sensors
- graphic display of temperature, humidity and air pressure curves
- freely selectable granularity of the representation
- freely adjustable period to be displayed
- quick overview of the last values

### additionally since 1.1.x :

- trend display for the development of temperature / humidity and pressure based on regression forecasts
- darkmode (persistent between sessions)
- mail on sensor inactivity

## Deployment

### ESP8266

A BME280 sensor is used to collect the weather data, which is controlled by a board with ESP8266 microcontroller and
NodeMCU 1.0 firmware. On the microcontroller the source code ``nodemcu.ino`` can be executed. For compiling, the Arduino
IDE should be used, in which the drivers for the ESP8266 must be installed first. For this purpose, the following board
administrator URL must be added in the preferences: ``http://arduino.esp8266.com/stable/package_esp8266com_index.json``.
In addition, the following libraries must be installed via the integrated library management:

|Library|Version|
|---|---|
|WiFi (by Arduino)|1.2.7|
|Adafruit BME280 Library (by Adafruit)|2.1.1|
|Adafruit Unified Sensor (by Adafruit)|1.1.4|
|EasyNTPClient (by Harsha Alva)|1.1.0|
|LinkedList (by Ivan Seidel)|1.2.3|

Before the source code is compiled, the following constants must be adapted to the local conditions:

- ``SERVER_TO_CONNECT``
- ``SSID``
- ``WIFI_PASSWORD``
- ``API_TOKEN`` (this must be equal to the value set in the backend)

The BME280 sensor and ESP8266 must be connected as follows:

|ESP8266 Pin|BME280 Pinhole|
|---|---|
|3.3V|VIN|
|G|GND|
|D1|SCL|
|D2|SDA|

The exact devices are:

- AZDelivery NodeMCU Lua Lolin V3 Module ESP8266 ESP-12F WIFI
- AZDelivery GY-BME280

### backend and frontend

Backend and frontend are deployed using Docker. The images for this can be built in the respective modules using
the ``buildImageandTar.sh`` scripts. These scripts build the images and make them available in the local docker
environment. Furthermore, tar balls with the respective images are stored in the project root folder. For this step we
decided to make the images available on a server without having to use Docker Registries (e.g. Docker.io)

#### deployment requirements under Windows

The project can be deployed using WSL 2 and Docker for Windows. For the preparation a WSL 2 must be set up first (link
to the manual: [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10)). Then Docker for Windows can be
installed with the WSL 2 components (link to instructions: [here](https://docs.docker.com/docker-for-windows/wsl/)). Now
that Docker for Windows has been setup, the selected Linux distribution can be started in the WSL. After that, the steps
for Linux have to be executed in the WSL.

#### deployment Voraussetzungen unter Linux

In Linux Docker as well as Node and npm are to be installed by the distribution-specific Package Manager.

#### Backend Start-Command:

```
docker run -d \
  --name=weathersensors-backend \
  -e INACTIVITY_CRON_SCHEDULE = `#optional` \
  -e INACTIVITY_THRESHOLD_MILLIS = `#optional` \
  -e ADMIN_MAIL_ADDRESS = mail@example.com \
  -e FRONTEND_LIVE_DOMAIN = weathersensors.jeujeus.de \
  -e MAIL_HOST = smtp.example.com \
  -e MAIL_PORT = 465 \
  -e MAIL_USER = mail@example.com \
  -e MAIL_PASSWORD = password\
  -e NODEMCU_API_TOKEN = api-token\
  -e LOG_LOCATION = `#optional` \
  -e LOG_SIZE = `#optional` \
  -e LOG_INTERVAL = `#optional` \
  -e LOG_COMPRESSION = `#optional` \
  -e LOG_LOCALE = `#optional` \
  -e LOG_AMPM = `#optional` \
  -p 3000:3000 \
  -p 80:80 `#optional` \
  -v /path/to/database:/usr/src/app/db \
  --restart unless-stopped \
  -it weathersensors/backend:latest
  ```

|Environment Variable| Necessity | Description|
|---|---|---|
|_INACTIVITY_CRON_SCHEDULE_ |optional| Cron schedule for checking sensor inactivity. Set to ``OFF`` in order to deactivate. (default: ```0 * * * *```)|
|INACTIVITY_THRESHOLD_MILLIS |optional| Threshold in milliseconds from which on a sensor should be flagged inactive. (default: 20minutes ```20*60*1000```)|
|ADMIN_MAIL_ADDRESS  | needed |  The Administrator's mail address - used to send inactivity Notifications to and from. (e.g. ``weathersensors@jeujeus.de``)|
|FRONTEND_LIVE_DOMAIN  | needed |  The Live Domain of the Frontend module. (e.g.: ``jeujeus.de``)|
|MAIL_HOST | needed | Mailservers Host (e.g.: ``smtp.example.com``)|
|MAIL_PORT | needed | Mailservers Port (e.g.: ``465`` SSL/TLS)|
|MAIL_USER | needed | Mailservers User (e.g. the mail address: ``weathersensors@jeujeus.de``)|
|MAIL_PASSWORD | needed | Mailservers Password|
|_NODEMCU_API_TOKEN_ |optional| The same API-Token used by the NodeMCU for Post Authentication|
|_LOG_LOCATION_ |optional| Logstream Location (default: ``log/backend.log``)|
|_LOG_SIZE_ |optional| Logstream maximum size before compression and rotation (default: ``10M``)|
|_LOG_INTERVAL_ |optional| Logstream rotation interval (default: one day ``1d``)|
|_LOG_COMPRESSION_ |optional| Logstream compression algorithm (default: ``gzip``)|
|_LOG_LOCALE_ |optional| Logstream locale (default: germany ``de-DE``)|
|_LOG_AMPM_ |optional| Logstream AM / PM format (default: 24h ``false``)|

#### Frontend Start-Command:

```
docker run -d \
  --name=weathersensors-backend \
  -e SERVER_URI = https://awe2-api.jeujeus.de \
  -e UPDATE_INTERVAL_MILLIS = `#optional` \
  -e NODEMCU_SEND_INTERVAL = `#optional` \
  -e LIN_REGRESSION_DATAPOINT_AMOUNT = `#optional` \
  -e TIMEZONE = `#optional` \
  -e LOCALE = `#optional` \
  -e ADMIN_PASSWORD = password \
  -e LOG_LOCATION = `#optional` \
  -e LOG_SIZE = `#optional` \
  -e LOG_INTERVAL = `#optional` \
  -e LOG_COMPRESSION = `#optional` \
  -e LOG_LOCALE = `#optional` \
  -e LOG_AMPM = `#optional` \
  -p 3344:3344 \
  --restart unless-stopped \
  -it weathersensors/frontend:latest
  ```

|Environment Variable| Necessity | Description|
|---|---|---|
|SERVER_URI | needed | URI of Backend (example: ``https://awe2-api.jeujeus.de``|
|_UPDATE_INTERVAL_MILLIS_ | optional | Time in Milliseconds for the UI Update / Data Poll Interval (default: 1 minute ``1000 * 60``|
|_NODEMCU_SEND_INTERVAL_ | optional | Time in Milliseconds defining how often the NodeMCU sends it's measurements to the backend (default: ``5`` minutes|
|_LIN_REGRESSION_DATAPOINT_AMOUNT_ | optional | The amount of data-points used for the prediction / trend calculation by the linear regression (default: ``10``)|
|_TIMEZONE_ | optional | The Servers Timezone (default: ``Europe/Berlin``)|
|_LOCALE_ | optional |  The Servers Timezone (default: ``de-DE``)|
|ADMIN_PASSWORD | needed | The Admin Interface password (*username: admin*)|
|_LOG_LOCATION_ |optional| Logstream Location (default: ``log/backend.log``)|
|_LOG_SIZE_ |optional| Logstream maximum size before compression and rotation (default: ``10M``)|
|_LOG_INTERVAL_ |optional| Logstream rotation interval (default: one day ``1d``)|
|_LOG_COMPRESSION_ |optional| Logstream compression algorithm (default: ``gzip``)|
|_LOG_LOCALE_ |optional| Logstream locale (default: germany ``de-DE``)|
|_LOG_AMPM_ |optional| Logstream AM / PM format (default: 24h ``false``)|
