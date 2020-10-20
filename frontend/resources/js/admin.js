import {SERVER_URI} from './constants.js';

class SensorTableFiller {
  constructor(serverURI) {
    this.serverURI = serverURI;
    this.sensorTable = document.getElementById('sensorTable');
  }

  init() {
    this.getSensors(SERVER_URI);
  }

  insertRows(sensor) {
    let row = this.sensorTable.insertRow(-1);
    row.insertCell(0).innerText = sensor.ID;
    row.insertCell(1).innerText = sensor.MAC_ADDRESS;
    row.insertCell(2).innerHTML = `<input type="text" class="form-control locationEntry" value="${sensor.LOCATION}">`;
  }

  getSensors(serverURI) {
    $.get(serverURI + '/sensors', (data) => {
      data.sensors.forEach((sensor) => {
        this.insertRows(sensor);
      });
    });
  }
}

const app = new SensorTableFiller(SERVER_URI);
app.init();
