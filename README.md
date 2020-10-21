# awe2-wettersensoren

Im Zuge dieses Projektes werden Arduinos mit einem Temperatur, Luftdruck und Feuchtigkeitssensor ausgestattet.
Diese senden die gesammelten Daten an einen zentralen Server, welcher die Daten verwaltet. 
Über einen Webserver lassen sich diese Daten visualisiert abrufen.


## Deployment 
### eps8266
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
```docker run -it --name awe2-backend -p 3000:3000 ```

#### Frontend StartCommand:
```docker run -it --name awe2-frontend -p 3344:3344 ```



