class SensorTableFiller {
  constructor(serverURI) {
    this.serverURI = serverURI;
    this.sensorTable = document.getElementById('sensorTable');
  }

  init() {
    this.getSensors(this.serverURI);
  }

  insertRows(sensor) {
    const row = this.sensorTable.insertRow(-1);
    row.insertCell(0).innerText = sensor.ID;
    row.insertCell(1).innerText = sensor.MAC_ADDRESS.toUpperCase();
    this.buildLocationEntry(sensor, row);
  }

  buildLocationEntry(sensor, row) {
    // TODO MAYBE REFACTOR INTO OWN STATIC CLASS
    row.insertCell(2).appendChild(this.createInputGroupWithButton(sensor));
  }

  createInputGroupWithButton(sensor) {
    const inputContainerDiv = document.createElement('div');
    inputContainerDiv.classList.add('input-group');
    inputContainerDiv.classList.add('location-input-group');
    const inputElement = this.createInputElement(sensor.LOCATION, sensor.ID);
    inputContainerDiv.appendChild(inputElement);
    inputContainerDiv.appendChild(this.createContainerDivWithButton(sensor.ID, inputElement));
    return inputContainerDiv;
  }

  createInputElement(sensorLocation, sensorId) {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('form-control');
    inputElement.classList.add('locationEntry');
    inputElement.value = sensorLocation;
    inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.postUpdateSensorLocation(sensorId, inputElement, e);
      }
    });
    return inputElement;
  }

  createContainerDivWithButton(sensorId, inputElement) {
    const inputContainerDivButton = document.createElement('div');
    inputContainerDivButton.classList.add('input-group-append');
    inputContainerDivButton.appendChild(this.createButtonElementWithEventListener(sensorId, inputElement));
    return inputContainerDivButton;
  }

  createButtonElementWithEventListener(sensorId, inputElement) {
    const buttonElement = document.createElement('button');
    buttonElement.type = 'submit';
    buttonElement.classList.add('btn');
    buttonElement.classList.add('btn-secondary');
    buttonElement.innerText = 'OK';
    buttonElement.addEventListener('click',
        this.postUpdateSensorLocation.bind(this, sensorId, inputElement), false);
    return buttonElement;
  }

  getSensors(serverURI) {
    $.get(serverURI + '/sensors', (data) => {
      data.sensors.forEach((sensor) => {
        this.insertRows(sensor);
      });
    });
  }

  postUpdateSensorLocation(id, inputElement, event) {
    const location = inputElement.value;
    const apiToken = document.querySelector('#api-token').value;
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
        showAndDismissAlert('success', 'Saved Successfully!');
      },
      failure: function(data) {
        showAndDismissAlert('danger', 'Error Encountered');
      },
      contentType: 'application/json',
    });
  }
}

function showAndDismissAlert(type, message) {
  const htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';
  $('.alert-messages').prepend(htmlAlert);
  $('.alert-messages .alert').first().hide().fadeIn(200).delay(2000).fadeOut(1000, function() {
    $(this).remove();
  });
}

module.exports = {
  'SensorTableFiller': SensorTableFiller,
};
