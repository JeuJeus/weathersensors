// ###################### LIB ############################################
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Adafruit_BME280.h>
// ###################### CONFIG ##########################################
#define SERVER_TO_CONNECT "http://awe2-api.jeujeus.de/weatherData"
#define SSID "$SSID-2.4ghz!"
#define WIFI_PASSWORD "$PASSWORD"
// ########################################################################
Adafruit_BME280 bme; // I2C
ESP8266WiFiMulti WiFiMulti;
byte mac[6];

const unsigned long DELAY_TIME_RECONNECT       = 1000*1;
const unsigned long DELAY_TIME_NO_SENSOR_FOUND = 1000*5;
const unsigned long DELAY_TIME_REST_SEND       = 1000*60*10;

void setup() {
    Serial.begin(115200);
    while(!Serial);    // time to get serial running
    delay(2000);
    Serial.println("--- Booted ---");

    unsigned status = bme.begin(0x76);
    while (!status) {
        Serial.println("Could not find a valid BME280 sensor at 0x");
        // todo make this shit work. Everytime sensor is not available, nodemcu crashed or w/e instead of going into this loop
        Serial.println(bme.sensorID());
        delay(DELAY_TIME_NO_SENSOR_FOUND);
        status = bme.begin(0x76);
    }
    WiFi.mode(WIFI_STA);
    WiFiMulti.addAP(SSID, WIFI_PASSWORD);
    Serial.println();
}


void loop() {
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {

    WiFi.macAddress(mac);
    char macaddress[18];
    snprintf(macaddress, sizeof(macaddress), "%02x:%02x:%02x:%02x:%02x:%02x",
         mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);

    float temperature;
    float pressure;
    float humidity;

    readValues(&temperature, &pressure, &humidity);
    logValues(temperature, pressure, humidity);

    WiFiClient client;
    HTTPClient http;

    Serial.print("[HTTP] begin...\n");
    if (http.begin(client, SERVER_TO_CONNECT)) {  // HTTP
      http.addHeader("Content-Type", "application/json");

      Serial.print("[HTTP] POSTING...\n");
      // start connection and send HTTP header

      char body[150];
      buildJson(&body[0], macaddress, temperature, pressure, humidity);

      int httpCode = http.POST(body);

      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTP] POST... code: %d\n", httpCode);

        // print response
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String payload = http.getString();
          Serial.println(payload);
        }
      } else {
        Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }

      http.end();
    } else {
      Serial.printf("[HTTP} Unable to connect\n");
    }
    delay(DELAY_TIME_REST_SEND);
  }

  delay(DELAY_TIME_RECONNECT);
}


void readValues(float *temperature, float *pressure, float *humidity) {
  *temperature = bme.readTemperature();
  *pressure = bme.readPressure() / 100.0F;
  *humidity = bme.readHumidity();
  return;
}

void buildJson(char* body, char macaddress[18], float temperature, float pressure, float humidity){
  // todo get timestamp from time server
  // todo get and set MAC-Address
  unsigned int timestamp = 0;
  sprintf(body, "{\"MACADDRESS\":\"%s\",\"TIMESTAMP\":\"%d\",\"TEMPERATURE\":%f,\"AIRPRESSURE\":%f,\"HUMIDITY\":%f}",
          macaddress, timestamp, temperature, pressure, humidity);
  return;
}

void logValues(float temperature, float pressure, float humidity) {
  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" *C");
  
  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");
  
  Serial.print("Pressure = ");
  Serial.print(pressure);
  Serial.println(" hPa");

  Serial.println();
  return; 
}