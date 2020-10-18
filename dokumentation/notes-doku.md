# Notizen

## Zu erwähnen in Abgabe
- wegen hardcoded Wlan -> von Internem explizit gewähltem Netzwerk auszugehen. Somit Schnittstellensicherheit nicht notwendig. Absicherung bei uns nicht vorhanden wegen "Corona"-Zusammenarbeit. 
- delay() ok lt. Arduino Dokumentation -> [arduino.cc](https://www.arduino.cc/reference/en/language/functions/time/delay/)
- Daten "granularity" -> "weglassen > averagen" - wegen rechenaufwand. Insb. bei Betrachtung großer Datenmengen (~Monate) wäre das nicht performant realisierbar.
- Mac Adressen sind nicht als unique gewählt, weil die Erfahrung gezeigt hat, dass insb. "Chinadesigns" von Arduinos z.t. gleiche MAC-Adressen besitzen und wir somit diese Fehlerquelle abfangen wollten.
