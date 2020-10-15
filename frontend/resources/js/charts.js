import {SERVER_URI, UPDATE_INTERVAL} from './localConfig.js';

let unifiedChart;

let sensorToPlot = 0;

let granularityInput = document.querySelector('#granularity');
let granularity = granularityInput.value;

init(sensorToPlot, granularity, granularityInput);

function init(sensorToPlot, granularity, granularityInput) {

  document.querySelector('#yAxisToggleButton').addEventListener('click', yAxisStartToggle, false);

  granularityInput.addEventListener('keydown', granularityOnChange.bind(this, sensorToPlot, granularity, granularityInput), false);

  createChartsForSensor(sensorToPlot, granularity);
  updateSensorsDropdown(granularity);
  setInterval(updateDataOnPage.bind(this, sensorToPlot, granularity), UPDATE_INTERVAL);
}

function createChart(chartCanvasName, data, timestamps, tempVals, airPressVals, humidVals) {

  let chart = document.getElementById(chartCanvasName).getContext('2d');

  return new Chart(chart, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        yAxisID: 'temp',
        label: tempVals.label,
        data: tempVals.data,
        backgroundColor: tempVals.color,
      }, {
        yAxisID: 'air',
        label: airPressVals.label,
        data: airPressVals.data,
        backgroundColor: airPressVals.color,
      }, {
        yAxisID: 'humid',
        label: humidVals.label,
        data: humidVals.data,
        backgroundColor: humidVals.color,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          id: 'temp',
          type: 'linear',
          position: 'left',
          ticks: {
            beginAtZero: false,
          },
        }, {
          id: 'air',
          type: 'linear',
          position: 'right',
          ticks: {
            beginAtZero: false,
          },
        }, {
          id: 'humid',
          type: 'linear',
          position: 'right',
          ticks: {
            beginAtZero: false,
          },
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: 20,
          },
        }],
      },
    },
  });
}

function mapValuesOfData(data) {
  let timestamps = data.sensorData.map(
    e => new Date(parseInt(e.TIMESTAMP)).toLocaleString('de-DE'),
  );
  let temperature = data.sensorData.map(
    e => e.TEMPERATURE,
  );
  let airPressure = data.sensorData.map(
    e => e.AIRPRESSURE,
  );
  let humidity = data.sensorData.map(
    e => e.HUMIDITY,
  );
  return {timestamps, temperature, airPressure, humidity};
}

function createChartsForSensor(sensorToPlot, granularity) {
  $.get(SERVER_URI + '/sensorData/id/' + sensorToPlot, function(data) {

    // data.sensorData = reduceElementsToMaxSize(data.sensorData, granularity);

    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);

    let tempVals = {
      label: 'Temperature',
      data: temperature,
      color: 'rgba(0, 119, 204, 0.3)',
    };
    let airPressVals = {
      label: 'Air Pressure',
      data: airPressure,
      color: 'rgb(0,204,109)',
    };
    let humidVals = {
      label: 'Humidity',
      data: humidity,
      color: 'rgb(204,0,112)',
    };

    unifiedChart = createChart('Sensor Data', data, timestamps, tempVals, airPressVals, humidVals);

    $.get(SERVER_URI + '/sensor/id/' + sensorToPlot, function(data) {
      setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], airPressure.slice(-1)[0], humidity.slice(-1)[0]);
    });
  });
}

function setValuesToBeDisplayed(sensor, tempNow, airPressNow, humidNow) {
  document.getElementById('sensorPlotting').innerText = sensor.ID;
  document.getElementById('sensorPlottingLocation').innerText = sensor.LOCATION ? sensor.LOCATION : '';
  document.getElementById('temperatureNow').innerText = tempNow.toFixed(2) + '°C';
  document.getElementById('airPressureNow').innerText = airPressNow.toFixed(2) + 'mbar';
  document.getElementById('humidityNow').innerText = humidNow.toFixed(2) + '%';
}

function updateChart(chart, timestamps, temperature, airPressure, humidity) {
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = temperature;
  chart.data.datasets[0].data = airPressure;
  chart.data.datasets[0].data = humidity;
  chart.update();
}

function updateCharts(sensorToPlot, granularity) {
  $.get(SERVER_URI + '/sensorData/id/' + sensorToPlot, function(data) {

    // data.sensorData = reduceElementsToMaxSize(data.sensorData, granularity);

    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);

    updateChart(unifiedChart, timestamps, temperature, airPressure, humidity);

    $.get(SERVER_URI + '/sensor/id/' + sensorToPlot, function(data) {
      setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], airPressure.slice(-1)[0], humidity.slice(-1)[0]);
    });
  });
}

function updateSensorsDropdown(granularity) {
  $.get(SERVER_URI + '/sensors/', function(data) {

    let sensorSelectDropdown = document.getElementById('sensorForChartDropdown');

    sensorSelectDropdown.querySelectorAll('*').forEach(n => n.remove());

    data.sensors.forEach(s => {
      let sensorLink = document.createElement('a');
      sensorLink.classList.add('dropdown-item');
      //TODO REPLACE ME WITH ALIAS
      sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
      sensorLink.onclick = updateCharts.bind(this, parseInt(s.ID), granularity);
      sensorSelectDropdown.append(sensorLink);
    });

  });
}

function granularityOnChange(sensorToPlot, currentGranularity, input, e) {
  let keycode = (e.keyCode ? e.keyCode : e.which);
  if (keycode === 13) {
    if (isInt(input.value)) {
      let newGranularity = parseInt(input.value);
      if (newGranularity !== currentGranularity && newGranularity > 1) {
        granularity = parseInt(input.value, 10);
        updateCharts(sensorToPlot, granularity);
      }
    }
  }
}

function updateDataOnPage(sensorToPlot, granularity) {
  updateCharts(sensorToPlot, granularity);
  updateSensorsDropdown(granularity);
}

function yAxisStartToggle() {
  //TODO THERE MUST BE SOME DAMN BETTER WAY DOING THIS
  unifiedChart.options.scales.yAxes[0].ticks.beginAtZero = !unifiedChart.options.scales.yAxes[0].ticks.beginAtZero;
  unifiedChart.options.scales.yAxes[1].ticks.beginAtZero = !unifiedChart.options.scales.yAxes[1].ticks.beginAtZero;
  unifiedChart.options.scales.yAxes[2].ticks.beginAtZero = !unifiedChart.options.scales.yAxes[2].ticks.beginAtZero;
  unifiedChart.update();
}
