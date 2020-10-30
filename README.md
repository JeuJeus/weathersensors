# Uniprojekt "Wettersensoren" <img src="frontend/resources/img/logo.png?" height="48" width="48">
## Anwendungsentwicklung 2 - FHDW Paderborn 

Im Zuge dieses Projektes werden Arduinos mit einem Temperatur, Luftdruck und Feuchtigkeitssensor ausgestattet.
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
tba TODO add me
Hier ist insbesondere auf die korrekte Anpassung des Wertes ```SERVER_TO_CONNECT``` zu achten.

### backend & frontend
Backend sowie Frontend werden mithilfe von Docker deployed. 
Die Images dafür lassen sich in den jeweiligen Modulen mit Hilfe der ```buildImageandTar.sh``` Skripts bauen.
Diese bauen die Images und stellen diese in der lokalen Dockerumgebung zum Start bereit.
Darüber hinaus werden im root-Ordner tar-Bälle mit den jeweiligen Images hinterlegt.
Für diesen Schritt haben wir uns entscheiden um die Images einfach auf einem Server verfügbar zu machen
ohne Docker Registries (e.g. Docker.io) in Anspruch nehmen zu müssen.

#### Backend StartCommand:
```docker run -p 3333:3333 -v $PATH_TO_DATABASE: /usr/src/app/db --name awe2-backend -it awe2/backend:beta```

replace ```$PATH_TO_DATABASE``` with the location you want to store the backends database on your system.

#### Frontend StartCommand:
```docker run -p 3344:3344 --name awe2-frontend -it awe2/frontend:beta```


## Easter Eggs
There are no Easter Eggs in our Code. We are serious programmers like Kazuhisa Hashimoto from Konami.


## Build Status:

![CI Frontend](https://github.com/JeuJeus/awe2-wettersensoren/workflows/Test%20Frontend/badge.svg) 
![Test Backend](https://github.com/JeuJeus/awe2-wettersensoren/workflows/Test%20Backend/badge.svg)
