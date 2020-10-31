# Uniprojekt "Wettersensoren" <img src="frontend/resources/img/logo.png?" height="48" width="48">
## Anwendungsentwicklung 2 - FHDW Paderborn 

Im Zuge dieses Projektes werden NodeMCU ESP8266 mit BME280 Sensoren (Temperatur, Luftdruck und Feuchtigkeitssensor) ausgestattet.
Diese senden die gesammelten Daten an einen zentralen Server, welcher die Daten verwaltet. 
Über einen Webserver lassen sich diese Daten visualisiert abrufen.

## Features:
- Sammeln von Wetterdaten von 'n' verschiedenen Sensoren
- Sensoraktivitätsindikator zur Übersicht aktiver Sensoren
- Auswahl des zu plottenden Sensors
- abgesichertes Admininterface zur Verwaltung der Sensoren
- graphische Darstellung der Temperatur-, Luftfeuchtigkeits- und Luftdruckverläufe
- frei wählbare Granularität der Darstellung
- frei wählbarer anzuzeigender Zeitraum
- schnell Übersicht der jeweils letzen Werte

## ![Live Version](https://awe2.jeujeus.de)

## Deployment 
### esp8266
Zur Erfassung der Wetterdaten wird ein BME280 Sensor verwendet, welcher von einem Board mit ESP8266 Mikrocontroller
und NodeMCU 1.0 Betriebssystem angesteuert wird. Auf diesem Mikrocontroller kann der Sourcecode nodemcu.ino ausgeführt werden.
Zum Kompilieren sollte die Arduino IDE verwendet werden, in der zuvor die Treiber für den ESP8266 installiert werden müssen.
Dazu muss in den Voreinstellungen folgende Boardverwalter-URL hinzugefügt werden: "http://arduino.esp8266.com/stable/package_esp8266com_index.json".
Darüber hinaus müssen folgende Bibliotheken über die integriete Bibliotheksverwaltung installiert werden:

|Bibliothek|Version|
|---|---|
|WiFi (by Arduino)|1.2.7|
|Adafruit BME280 Library (by Adafruit)|2.1.1|
|Adafruit Unified Sensor (by Adafruit)|1.1.4|
|EasyNTPClient (by Harsha Alva)|1.1.0|
|LinkedList (by Ivan Seidel)|1.2.3|
 

Bevor der Quellcode kompiliert wird, müssen die folgenden Konstanten auf die lokalen Gegebenheiten angepasst werden:
- SERVER_TO_CONNECT
- SSID 
- WIFI_PASSWORD 

Der BME280 Sensor und der ESP8266 müssen folgendermaßen verbunden werden:

|ESP8266 Pin|BME280 Pinhole|
|---|---|
|3.3V|VIN|
|G|GND|
|D1|SCL|
|D2|SDA|

Die exakten Geräte sind:
- AZDelivery NodeMCU Lua Lolin V3 Module ESP8266 ESP-12F WIFI 
- AZDelivery GY-BME280 Barometrischer Sensor für Temperatur, Luftfeuchtigkeit und Luftdruck


### backend & frontend
Backend sowie Frontend werden mithilfe von Docker deployed. 
Die Images dafür lassen sich in den jeweiligen Modulen mit Hilfe der ```buildImageandTar.sh``` Skripts bauen.
Diese bauen die Images und stellen diese in der lokalen Dockerumgebung zum Start bereit.
Darüber hinaus werden im root-Ordner tar-Bälle mit den jeweiligen Images hinterlegt.
Für diesen Schritt haben wir uns entscheiden um die Images einfach auf einem Server verfügbar zu machen
ohne Docker Registries (e.g. Docker.io) in Anspruch nehmen zu müssen.

### Docker Deployment unter Windows
Das Projekt kann mithilfe der WSL 2 und Docker for Windows deployed werden.
Für die Vorbereitung muss zunächst eine WSL 2 eingerichtet werden. (Eine Anleitung für die Einrichtung der WSL 2 kann hier gefunden werden: https://docs.microsoft.com/en-us/windows/wsl/install-win10)
Danach kann Docker for Windows mit den WSL 2-Komponenten installiert werden. (Eine Anleitung für die Installation von Docker for Windows mit WSL 2-Komponenten kann hier gefunden werden: https://docs.docker.com/docker-for-windows/wsl/)
Nachdem Docker for Windows bereitgestellt wurde kann die ausgewählte Linux Distribution in der WSL gestartet werden. Es ist sicherzustellen, dass npm installiert ist, beispielsweise mit dem Befehl ```npm --version```.
Der Befehl ```docker run hello-world``` erlaubt die Überprüfung ob alles korrekt installiert wurde. 
Mithilfe des Skripts ```buildImageandTar.sh``` können wie oben genannt im Projektverzeichnis die Images für das Front- und Backend gebaut werden. Nach der Ausführung des Skripts sind in Docker for Windows unter Images sowohl das Frontend als auch das Backend aufgeführt. Die folgenden beiden Kommandos erlauben das deployen der Container über das WSL-Terminal. 

#### Backend StartCommand:
```docker run -p 3333:3333 -v $PATH_TO_DATABASE: /usr/src/app/db --name awe2-backend -it awe2/backend:beta```

replace ```$PATH_TO_DATABASE``` with the location you want to store the backends database on your system.

#### Frontend StartCommand:
```docker run -p 3344:3344 --name awe2-frontend -it awe2/frontend:beta```


## Easter Eggs
There are no Easter Eggs in our Code. We are serious programmers like Kazuhisa Hashimoto from Julius Figge Enterprises.


## Build Status:

![CI Frontend](https://github.com/JeuJeus/awe2-wettersensoren/workflows/Test%20Frontend/badge.svg) 
![Test Backend](https://github.com/JeuJeus/awe2-wettersensoren/workflows/Test%20Backend/badge.svg)
