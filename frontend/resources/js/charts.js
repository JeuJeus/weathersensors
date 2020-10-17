import {
  AIRPRESSURE_COLOR,
  HUMIDITY_COLOR,
  SERVER_URI,
  TEMPERATURE_COLOR,
  UPDATE_INTERVAL,
} from './constants.js';

let unifiedChart;

let sensorToPlot = 1;

let granularityInput = document.querySelector('#granularity');
let granularity = granularityInput.value;

init(sensorToPlot, granularity, granularityInput);

function init(sensorToPlot, granularity, granularityInput) {

  document.querySelector('#yAxisToggleButton').addEventListener('click', yAxisStartToggle, false);

  granularityInput.addEventListener('keydown', granularityOnChange.bind(this, granularityInput), false);

  createChartsForSensor(sensorToPlot, granularity);
  updateSensorsDropdown(granularity);
  setInterval(updateDataOnPage.bind(this, sensorToPlot, granularity), UPDATE_INTERVAL);
}

function createChart(chartCanvasName, data, timestamps, tempValues, humidValues, airPressValues) {

  let chart = document.getElementById(chartCanvasName).getContext('2d');

  return new Chart(chart, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        yAxisID: 'temp',
        label: tempValues.label,
        data: tempValues.data,
        borderColor: TEMPERATURE_COLOR,
      }, {
        yAxisID: 'humid',
        label: humidValues.label,
        data: humidValues.data,
        borderColor: HUMIDITY_COLOR,
      }, {
        yAxisID: 'air',
        label: airPressValues.label,
        data: airPressValues.data,
        borderColor: AIRPRESSURE_COLOR,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          id: 'temp',
          type: 'linear',
          position: 'left',
          ticks: {
            fontColor: TEMPERATURE_COLOR,
            beginAtZero: false,
            callback: function (value) {
              return value + '°C';
            },
          },
        }, {
          id: 'humid',
          type: 'linear',
          position: 'right',
          ticks: {
            fontColor: HUMIDITY_COLOR,
            beginAtZero: false,
            callback: function (value) {
              return value + '%';
            },
          },
        }, {
          id: 'air',
          type: 'linear',
          position: 'right',
          ticks: {
            fontColor: AIRPRESSURE_COLOR,
            beginAtZero: false,
            callback: function (value) {
              return value + ' mbar';
            },
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
  let humidity = data.sensorData.map(
    e => e.HUMIDITY,
  );
  let airPressure = data.sensorData.map(
    e => e.AIRPRESSURE,
  );
  return {timestamps, temperature, airPressure, humidity};
}

function createChartsForSensor(sensorToPlot, granularity) {
  $.get(SERVER_URI + '/sensorData/id/' + sensorToPlot, function(data) {
    //todo move back to backend
    data.sensorData = reduceElementsToMaxSize(data.sensorData, granularity);

    let {timestamps, temperature, humidity, airPressure} = mapValuesOfData(data);

    let tempValues = {
      label: 'Temperature',
      data: temperature,
    };
    let humidValues = {
      label: 'Humidity',
      data: humidity,
    };
    let airPressValues = {
      label: 'Air Pressure',
      data: airPressure,
    };

    unifiedChart = createChart('Sensor Data', data, timestamps, tempValues, humidValues, airPressValues);

    $.get(SERVER_URI + '/sensor/id/' + sensorToPlot, function(data) {
      setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
    });
  });
}

function setValuesToBeDisplayed(sensor, tempNow, humidNow, airPressNow) {
  document.getElementById('sensorPlotting').innerText = sensor.ID;
  document.getElementById('sensorPlottingLocation').innerText = sensor.LOCATION ? sensor.LOCATION : '';
  document.getElementById('temperatureNow').innerText = tempNow.toFixed(2) + '°C';
  document.getElementById('humidityNow').innerText = humidNow.toFixed(2) + '%';
  document.getElementById('airPressureNow').innerText = airPressNow.toFixed(2) + 'mbar';
}

function updateChart(chart, timestamps, temperature, humidity, airPressure) {
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = temperature;
  chart.data.datasets[1].data = humidity;
  chart.data.datasets[2].data = airPressure;
  chart.update();
}

function updateCharts(sensorToPlot, granularity) {
  $.get(SERVER_URI + '/sensorData/id/' + sensorToPlot, function(data) {
    //todo move back to backend
    data.sensorData = reduceElementsToMaxSize(data.sensorData, granularity);

    let {timestamps, temperature, humidity, airPressure} = mapValuesOfData(data);

    updateChart(unifiedChart, timestamps, temperature, humidity, airPressure);

    $.get(SERVER_URI + '/sensor/id/' + sensorToPlot, function(data) {
      setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
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
      sensorLink.onclick = sensorLinkOnClick.bind(this, parseInt(s.ID), granularity);
      sensorSelectDropdown.append(sensorLink);
    });

  });
}

function EnterKeyPressed(e) {
  return (e.keyCode ? e.keyCode : e.which) === 13;
}

function isInt(value) {
  return /^\d+$/.test(value);
}

function granularityOnChange(input, e) {
  if (EnterKeyPressed(e) && isInt(input.value)) {
    e.preventDefault();
    let newGranularity = parseInt(input.value);
    if (newGranularity !== granularity && newGranularity > 1) {
      granularity = parseInt(input.value, 10);
      updateCharts(sensorToPlot, granularity);
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

//todo move back to backend
function reduceElementsToMaxSize(elements, maxSize){
  if (elements.length <= maxSize) return elements;
  let orig_size = elements.length;
  return Array.from({length: maxSize}, (_, i) =>
      elements[Math.floor(i * (orig_size + Math.floor(orig_size/maxSize))/maxSize)]);
}

function sensorLinkOnClick(ID, granularity){
  sensorToPlot = ID;
  updateCharts(sensorToPlot, granularity);
}
