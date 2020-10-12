/***************************************************************************
  Let me know that I've done wrong
  When I've known this all along
  I go around a time or two
  Just to waste my time with you
  Tell me all that you've thrown away
  Find out games you don't wanna play
  You are the only one that needs to know

  I'll keep you my dirty little secret (dirty little secret)
  Don't tell anyone or you'll be just another regret
  (Just another regret, hope that you can keep it)
  My dirty little secret

  Who has to know?
  When we live such fragile lives
  It's the best way we survive
  I go around a time or two
  Just to waste my time with you
  Tell me all that you've thrown away
  Find out games you don't wanna play
  You are the only one that needs to know


  I'll keep you my dirty little secret (dirty little secret)
  Don't tell anyone or you'll be just another regret
  (Just another regret, hope that you can keep it)
  My dirty little secret

  Who has to know?
  The way she feels inside (inside)
  Those thoughts I can't deny (deny)
  These sleeping thoughts won't lie (won't lie)
  And all I've tried to hide
  It's eating me apart
  Trace this life out

  I'll keep you my dirty little secret (dirty little secret)
  Don't tell anyone or you'll be just another regret (just another regret)

  I'll keep you my dirty little secret (dirty little secret)
  Don't tell anyone or you'll be just another regret
  (Just another regret, hope that you can keep it)
  My dirty little secret
  Dirty little secret
  Dirty little secret

  Who has to know?
  Who has to know?
 ***************************************************************************/
#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <ESP8266HTTPClient.h>

#include <WiFiClient.h>
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#define SEALEVELPRESSURE_HPA (1013.25)

Adafruit_BME280 bme; // I2C

ESP8266WiFiMulti WiFiMulti;

unsigned long delayTime;

float temperature;
float pressure;
float humidity;


void setup() {
    Serial.begin(115200);
    while(!Serial);    // time to get serial running
    Serial.println(F("BME280 test"));

    unsigned status;

    // default settings
    status = bme.begin(0x76);
    // You can also pass in a Wire library object like &Wire2
    // status = bme.begin(0x76, &Wire2)
    if (!status) {
        Serial.println("Could not find a valid BME280 sensor, check wiring, address, sensor ID!");
        Serial.print("SensorID was: 0x"); Serial.println(bme.sensorID(),16);
        while (1) delay(10);
    }

    delayTime = 10000;

    WiFi.mode(WIFI_STA);
    WiFiMulti.addAP("gast", "gchf57snbos21234");

    Serial.println();
}


void loop() {
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {
    readValues();
    WiFiClient client;
    HTTPClient http;

    Serial.print("[HTTP] begin...\n");
    if (http.begin(client, "http://192.168.179.21:3000/weatherData")) {  // HTTP
      http.addHeader("Content-Type", "application/json");

      Serial.print("[HTTP] POSTING...\n");
      // start connection and send HTTP header
      static int id = 0;
      id++;

      char body[150];
      sprintf(body, "{\"SENSOR_ID\":0,\"TIMESTAMP\":\"1602179752821.4\",\"TEMPERATURE\":%f,\"AIRPRESSURE\":%f,\"HUMIDITY\":%f}",
              temperature, pressure, humidity);
      Serial.println(body);

      int httpCode = http.POST(body);

      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTP] POST... code: %d\n", httpCode);

        // file found at server
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
  }

  //delay(delayTime);
}


void readValues() {

    temperature = bme.readTemperature();
    Serial.print("Temperature = ");
    Serial.print(temperature);
    Serial.println(" *C");

    pressure = bme.readPressure() / 100.0F;
    Serial.print("Pressure = ");
    Serial.print(pressure);
    Serial.println(" hPa");

    Serial.print("Approx. Altitude = ");
    Serial.print(bme.readAltitude(SEALEVELPRESSURE_HPA));
    Serial.println(" m");

    humidity = bme.readHumidity();
    Serial.print("Humidity = ");
    Serial.print(humidity);
    Serial.println(" %");

    Serial.println();
}