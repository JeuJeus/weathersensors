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
    this.buildLocationEntry(sensor, row);
  }

  buildLocationEntry(sensor, row) {
    this.createButtonElement()
      .addEventListener('click',
        this.postUpdateSensorLocation.bind(this, sensor.ID), false);
    row.insertCell(2).appendChild(this.createInputContainerDiv(sensor));
  }

  createInputContainerDiv(sensor) {
    let inputContainerDiv = document.createElement('div');
    inputContainerDiv.classList.add('input-group');
    inputContainerDiv.appendChild(this.createInputElement(sensor));
    inputContainerDiv.appendChild(this.createContainerDivButton());
    return inputContainerDiv;
  }

  createInputElement(sensor) {
    let inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'inputLocation';
    inputElement.classList.add('form-control');
    inputElement.classList.add('locationEntry');
    inputElement.value = sensor.LOCATION;
    return inputElement;
  }

  createContainerDivButton() {
    let inputContainerDivButton = document.createElement('div');
    inputContainerDivButton.classList.add('input-group-append');
    inputContainerDivButton.appendChild(this.createButtonElement());
    return inputContainerDivButton;
  }

  createButtonElement() {
    let buttonElement = document.createElement('button');
    buttonElement.type = 'submit';
    buttonElement.classList.add('btn');
    buttonElement.classList.add('btn-secondary');
    buttonElement.innerText = 'OK';
    return buttonElement;
  }

  getSensors(serverURI) {
    $.get(serverURI + '/sensors', (data) => {
      data.sensors.forEach((sensor) => {
        this.insertRows(sensor);
      });
    });
  }

  postUpdateSensorLocation(id) {
    var location = $("#inputLocation").val();
    $.post(this.serverURI + '/updateSensorLocation', {ID: id, LOCATION: location});
  }
}

const app = new SensorTableFiller(SERVER_URI);
app.init();
