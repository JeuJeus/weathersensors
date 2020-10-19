import {SERVER_URI} from './constants.js';

class SensorTableFiller {
  constructor(serverURI, sensorTable) {
    this.serverURI = serverURI;
    this.sensorTable = document.getElementById(sensorTable);
  }

  init() {
    this.getSensors(SERVER_URI);
  }

  addToTable(s) {
    const row = this.sensorTable.insertRow(-1);
    row.insertCell(0).innerText = s.ID;
    row.insertCell(1).innerText = s.MAC_ADDRESS;
    row.insertCell(2).innerText = s.LOCATION;
  }

  getSensors(serverURI) {
    $.get(serverURI + '/sensors', (data) => {
      data.sensors.forEach((s) => this.addToTable(s));
    });
  }
}

const app = new SensorTableFiller(SERVER_URI, 'sensorTable');
app.init();
