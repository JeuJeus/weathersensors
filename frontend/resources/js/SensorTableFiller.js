class SensorTableFiller {
  constructor(serverURI) {
    this.serverURI = serverURI;
    this.sensorTable = document.getElementById('sensorTable');
  }

  init() {
    this.getSensors(this.serverURI);
  }

  insertRows(sensor) {
    let row = this.sensorTable.insertRow(-1);
    row.insertCell(0).innerText = sensor.ID;
    row.insertCell(1).innerText = sensor.MAC_ADDRESS;
    this.buildLocationEntry(sensor, row);
  }

  buildLocationEntry(sensor, row) {
    //TODO MAYBE REFACTOR INTO OWN STATIC CLASS
    row.insertCell(2).appendChild(this.createInputGroupWithButton(sensor));
  }

  createInputGroupWithButton(sensor) {
    let inputContainerDiv = document.createElement('div');
    inputContainerDiv.classList.add('input-group');
    inputContainerDiv.appendChild(this.createInputElement(sensor.LOCATION));
    inputContainerDiv.appendChild(this.createContainerDivWithButton(sensor.ID));
    return inputContainerDiv;
  }

  createInputElement(sensorLocation) {
    let inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'inputLocation';
    inputElement.classList.add('form-control');
    inputElement.classList.add('locationEntry');
    inputElement.value = sensorLocation;
    return inputElement;
  }

  createContainerDivWithButton(sensorId) {
    let inputContainerDivButton = document.createElement('div');
    inputContainerDivButton.classList.add('input-group-append');
    inputContainerDivButton.appendChild(this.createButtonElementWithEventListener(sensorId));
    return inputContainerDivButton;
  }

  createButtonElementWithEventListener(sensorId) {
    let buttonElement = document.createElement('button');
    buttonElement.type = 'submit';
    buttonElement.classList.add('btn');
    buttonElement.classList.add('btn-secondary');
    buttonElement.innerText = 'OK';
    //TODO ALSO DO THIS WITH ENTER ON INPUT
    //TODO MAYBE EXTRACT EVENT LISTENER CREATION TO OWN FUNCTION
    buttonElement.addEventListener('click',
        this.postUpdateSensorLocation.bind(this, sensorId), false);
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
    // TODO MAKE SURE TO UPDATE THIS WHEN ID INCREMENTING GETS CHANGED TO START AT 0
    const location = $('.locationEntry').eq(id - 1).val();
    const apiToken = $('#api-token').val();
    $.ajax({
      type: 'POST',
      url: this.serverURI + '/updateSensorLocation',
      data: JSON.stringify(
        {
          API_TOKEN: apiToken,
          ID: id,
          LOCATION: location,
        }),
      success: function(data) {
        alert(data);
      },
      failure: function(data) {
        alert(data);
      },
      contentType: 'application/json',
    });
  }
}

module.exports = {
  'SensorTableFiller': SensorTableFiller,
};
