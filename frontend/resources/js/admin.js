import {
  SERVER_URI,
} from './constants.js';

const table = document.getElementById('sensorTable');

class SensorTableFiller {
  constructor(serverURI) {
    this.serverURI = serverURI;
  }

  init() {
    this.getSensors(SERVER_URI);
  }

  addToTable(s) {
    const row = table.insertRow(-1);
    const idCol = row.insertCell(0);
    const macCol = row.insertCell(1);
    const locCol = row.insertCell(2);
    idCol.innerText = s.ID;
    macCol.innerText = s.MAC_ADDRESS;
    locCol.innerText = s.LOCATION;
  }

  getSensors(serverURI) {
    $.get(serverURI + '/sensors', (data) => {
      data.sensors.forEach((s) => this.addToTable(s));
    });
  }
}

const app = new SensorTableFiller(SERVER_URI);
app.init();
