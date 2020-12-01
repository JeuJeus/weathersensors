// ###################### LIB ############################################
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Adafruit_BME280.h>
#include <LinkedList.h>
#include <EasyNTPClient.h>
#include <WiFiUdp.h>
// ###################### CONFIG ##########################################
#define SERVER_TO_CONNECT "http://awe2-api.jeujeus.de/weatherData"
#define SSID "$SSID-2.4ghz!"
#define WIFI_PASSWORD "$PASSWORD"
#define API_TOKEN "$NODEMCU_API_TOKEN"
#define MAC_ADDRESS_LENGTH 18
#define MAX_SENSOR_DATA 100
// ########################################################################
struct sensorData {
  float temperature;
  float pressure;
  float humidity;
  //based on unix timestamp with second accuracy
  int timestamp;
};

Adafruit_BME280 bme; // I2C
ESP8266WiFiMulti WiFiMulti;
WiFiUDP udp;
EasyNTPClient ntpClient(udp, "pool.ntp.org");

const unsigned long DELAY_TIME_NO_SENSOR_FOUND = 1000*5;
const unsigned long SEND_INTERVAL_IN_MINUTES   = 5;
const unsigned long DELAY_TIME_REST_SEND       = 1000*60*SEND_INTERVAL_IN_MINUTES;
const unsigned long DELAY_TIME_INITIAL_CONNECT = 1000*15;
char macAddress[MAC_ADDRESS_LENGTH];

LinkedList<struct sensorData> dataList = LinkedList<struct sensorData>();

void setup() {
    Serial.begin(115200);
    while(!Serial);    // time to get serial running
    delay(2000);
    Serial.println("--- Booted ---");

    unsigned status = bme.begin(0x76);
    while (!status) {
        Serial.println("Could not find a valid BME280 sensor at 0x");
        Serial.println(bme.sensorID());
        delay(DELAY_TIME_NO_SENSOR_FOUND);
        status = bme.begin(0x76);
    }
    WiFi.disconnect(true); // flush connections
    WiFi.mode(WIFI_STA);
    WiFiMulti.addAP(SSID, WIFI_PASSWORD);
    Serial.println();

    getMacAddress(macAddress, MAC_ADDRESS_LENGTH);
    WiFiMulti.run();
    delay(DELAY_TIME_INITIAL_CONNECT);
}


void loop() {
  struct sensorData data;

  readValues(&data);
  logValues(&data);
  if (dataList.size() == MAX_SENSOR_DATA){
    dataList.shift();
  }
  dataList.add(data);

  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {
    sendCachedData();
  }
  else{
    Serial.println("No wifi connection");
  }
  delay(DELAY_TIME_REST_SEND);
}

float assureTimestampWhenNoConnection(int positionInCache,int cacheLength, int timestamp){
    int now = 0;
    do {
        //assure udp connection to ntp is established
        now = ntpClient.getUnixTime();
    } while (now == 0);
    //"Cache" is based on FIFO where each element is $(SEND_INTERVAL_IN_MINUTES) minutes of age apart
    int ageMinutes = (cacheLength-positionInCache)*SEND_INTERVAL_IN_MINUTES;
    return (now - (ageMinutes * 60));
}

void sendCachedData(){
  WiFiClient client;
  HTTPClient http;
  int i = 0;

  while(i < dataList.size()){
    struct sensorData data = dataList.get(i);
    //Serial.print("[HTTP] begin...\n");
    if (http.begin(client, SERVER_TO_CONNECT)) {
      http.addHeader("Content-Type", "application/json");

      if(data.timestamp == 0){
        Serial.println("Correcting null Value timestamp after connection loss.");
        data.timestamp = assureTimestampWhenNoConnection(i,dataList.size(),data.timestamp);
      }

      char body[200];
      buildJson(&body[0], macAddress,data.timestamp, data.temperature, data.pressure, data.humidity);
      int httpCode = http.POST(body);

      if (processHttpResponse(&http, httpCode)) {
        dataList.remove(i--);
      }

      http.end();
    } else {
        Serial.printf("[HTTP} Unable to connect\n");
    }
    i++;
  }
}

boolean processHttpResponse(HTTPClient *http, int httpCode){
  // httpCode will be negative on error
  if (httpCode > 0) {
    // HTTP header has been send and Server response header has been handled
    Serial.printf("[HTTP] POST... code: %d\n", httpCode);

    // print response
    // MOVED_PERMANENTLY IS OKAY BECAUSE OF PROXY
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY || httpCode == HTTP_CODE_BAD_REQUEST) {
      String payload = http->getString();
      Serial.println(payload);
      return true;
    }
  } else {
    Serial.printf("[HTTP] POST... failed: [%d], error: %s\n", httpCode, http->errorToString(httpCode).c_str());
  }
  return false;
}

void getMacAddress(char* macAddress, int n){
  byte mac[6];
  WiFi.macAddress(mac);

  snprintf(macAddress, sizeof(char) * n, "%02x:%02x:%02x:%02x:%02x:%02x",
           mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
}

void readValues(struct sensorData* data) {
  data->timestamp = int(ntpClient.getUnixTime());
  data->temperature = bme.readTemperature();
  data->pressure = bme.readPressure() / 100.0F;
  data->humidity = bme.readHumidity();
  return;
}

void buildJson(char* body, char macaddress[MAC_ADDRESS_LENGTH], unsigned long timestamp, float temperature, float pressure, float humidity){
  sprintf(body, "{\"API_TOKEN\":\"%s\",\"MACADDRESS\":\"%s\",\"TIMESTAMP\":\"%d\",\"TEMPERATURE\":%f,\"AIRPRESSURE\":%f,\"HUMIDITY\":%f}",
          API_TOKEN, macaddress, timestamp, temperature, pressure, humidity);
  return;
}

void logValues(struct sensorData* data) {
  Serial.print("Timestamp = ");
  Serial.print(data->timestamp);
  Serial.println(" UNIX-Time");

  Serial.print("Temperature = ");
  Serial.print(data->temperature);
  Serial.println(" *C");

  Serial.print("Humidity = ");
  Serial.print(data->humidity);
  Serial.println(" %");

  Serial.print("Pressure = ");
  Serial.print(data->pressure);
  Serial.println(" hPa");

  Serial.println();
  return;
}
