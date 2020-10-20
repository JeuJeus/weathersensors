(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const c = require('./constants');
const App = require('./GeileTypenWetterApp');
// creating app
const app = new App.GeileTypenWetterApp(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR, c.SERVER_URI, c.UPDATE_INTERVAL,
    '#granularity', '#yAxisToggleButton', 'sensorPlotting',
    'sensorPlottingLocation', 'temperatureNow', 'humidityNow',
    'airPressureNow', 'sensorForChartDropdown', '#yAxisToggleButton',
    'sensorPlottingLocation', 'temperatureNow', 'humidityNow', 'airPressureNow', 'sensorForChartDropdown');
app.init();

},{"./GeileTypenWetterApp":2,"./constants":3}],2:[function(require,module,exports){
class GeileTypenWetterApp {
  constructor(temperatureColor, airPressureColor, humidityColor, serverURI, updateInterval,
      granularityInputSelector, yAxisToggleSelector, sensorPlottingSelector, sensorPlotLocationSelector, temperatureNowSelector,
      humidityNowSelector, airPressureNowSelector, sensorDropdownSelector) {
    // DOM - Elements
    this.granularityInput = document.querySelector(granularityInputSelector);
    this.yAxisToggleButton = document.querySelector(yAxisToggleSelector);
    this.sensorPlotting = document.getElementById(sensorPlottingSelector);
    this.sensorPlottingLocation = document.getElementById(sensorPlotLocationSelector);
    this.temperatureNow = document.getElementById(temperatureNowSelector);
    this.humidityNow = document.getElementById(humidityNowSelector);
    this.airPressureNow = document.getElementById(airPressureNowSelector);
    this.sensorSelectDropdown = document.getElementById(sensorDropdownSelector);

    // current state
    this.granularity = this.granularityInput.value;
    this.sensorToPlot = 1;

    this.unifiedChart = undefined;
    // config
    this.temperatureColor = temperatureColor;
    this.humidityColor = humidityColor;
    this.airpressureColor = airPressureColor;

    this.serverURI = serverURI;
    this.updateInterval = updateInterval;

  }

  init() {

    this.yAxisToggleButton.addEventListener('click', this.yAxisStartToggle.bind(this), false);

    this.granularityInput.addEventListener('keydown', this.granularityOnChange.bind(this, this.granularityInput), false);

    this.createChartsForSensor(this.sensorToPlot, this.granularity, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.serverURI);
    setInterval(this.updateDataOnPage.bind(this), this.updateInterval);
  }

  createChart(chartCanvasName, data, timestamps, tempValues, humidValues, airPressValues, tempColor, airPressColor, humidColor) {
    const chart = document.getElementById(chartCanvasName).getContext('2d');

    // TODO REFACTOR ME INTO OWN CLASS?
    return new Chart(chart, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [{
          yAxisID: 'temp',
          label: tempValues.label,
          data: tempValues.data,
          borderColor: tempColor,
        }, {
          yAxisID: 'humid',
          label: humidValues.label,
          data: humidValues.data,
          borderColor: humidColor,
        }, {
          yAxisID: 'air',
          label: airPressValues.label,
          data: airPressValues.data,
          borderColor: airPressColor,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            id: 'temp',
            type: 'linear',
            position: 'left',
            ticks: {
              fontColor: tempColor,
              beginAtZero: false,
              callback: function(value) {
                return value + '°C';
              },
            },
          }, {
            id: 'humid',
            type: 'linear',
            position: 'right',
            ticks: {
              fontColor: humidColor,
              beginAtZero: false,
              callback: function(value) {
                return value + '%';
              },
            },
          }, {
            id: 'air',
            type: 'linear',
            position: 'right',
            ticks: {
              fontColor: airPressColor,
              beginAtZero: false,
              callback: function(value) {
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

  mapValuesOfData(data) {
    const timestamps = data.sensorData.map(
        (e) => new Date(parseInt(e.TIMESTAMP)).toLocaleString('de-DE'),
    );
    const temperature = data.sensorData.map(
        (e) => e.TEMPERATURE,
    );
    const humidity = data.sensorData.map(
        (e) => e.HUMIDITY,
    );
    const airPressure = data.sensorData.map(
        (e) => e.AIRPRESSURE,
    );
    return {timestamps, temperature, airPressure, humidity};
  }

  createChartsForSensor(sensorToPlot, granularity, serverURI) {
    $.get(serverURI + '/sensorData/id/' + sensorToPlot, {'granularity': granularity}, (data) => {
      const {timestamps, temperature, humidity, airPressure} = this.mapValuesOfData(data);

      const tempValues = {
        label: 'Temperature',
        data: temperature,
      };
      const humidValues = {
        label: 'Humidity',
        data: humidity,
      };
      const airPressValues = {
        label: 'Air Pressure',
        data: airPressure,
      };

      this.unifiedChart = this.createChart('Sensor Data', data, timestamps, tempValues, humidValues, airPressValues,
          this.temperatureColor, this.airpressureColor, this.humidityColor);
      $.get(serverURI + '/sensor/id/' + sensorToPlot, (data) => {
        this.setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
      });
    });
  }

  setValuesToBeDisplayed(sensor, tempNow, humidNow, airPressNow) {
    this.sensorPlotting.innerText = sensor.ID;
    this.sensorPlottingLocation.innerText = sensor.LOCATION ? sensor.LOCATION : '';
    this.temperatureNow.innerText = tempNow.toFixed(2) + '°C';
    this.humidityNow.innerText = humidNow.toFixed(2) + '%';
    this.airPressureNow.innerText = airPressNow.toFixed(2) + 'mbar';
  }

  updateChart(chart, timestamps, temperature, humidity, airPressure) {
    chart.data.labels = timestamps;
    chart.data.datasets[0].data = temperature;
    chart.data.datasets[1].data = humidity;
    chart.data.datasets[2].data = airPressure;
    chart.update();
  }

  updateCharts(sensorToPlot, granularity, serverURI) {
    $.get(serverURI + '/sensorData/id/' + sensorToPlot, {'granularity': granularity}, (data) => {
      const {timestamps, temperature, humidity, airPressure} = this.mapValuesOfData(data);

      this.updateChart(this.unifiedChart, timestamps, temperature, humidity, airPressure);

      $.get(serverURI + '/sensor/id/' + sensorToPlot, (data) => {
        this.setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
      });
    });
  }

  updateSensorsDropdown(granularity, serverURI) {
    $.get(serverURI + '/sensors/', (data) => {
      this.sensorSelectDropdown.querySelectorAll('*').forEach((n) => n.remove());

      data.sensors.forEach((s) => {
        const sensorLink = document.createElement('a');
        sensorLink.classList.add('dropdown-item');
        // TODO REPLACE ME WITH ALIAS
        sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
        sensorLink.onclick = this.sensorLinkOnClick.bind(this, parseInt(s.ID), granularity, serverURI);
        this.sensorSelectDropdown.append(sensorLink);
      });
    });
  }

  granularityOnChange(input, e) {
    if (enterKeyPressed(e) && isInt(input.value)) {
      e.preventDefault();
      const newGranularity = parseInt(input.value);
      if (newGranularity !== this.granularity && newGranularity > 1) {
        this.granularity = parseInt(input.value, 10);
        this.updateDataOnPage(this.sensorToPlot, this.granularity, this.serverURI);
      }
    }
  }

  updateDataOnPage() {
    this.updateCharts(this.sensorToPlot, this.granularity, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.serverURI);
  }

  yAxisStartToggle() {
    this.unifiedChart.options.scales.yAxes.forEach((yAxis) => {
      yAxis.ticks.beginAtZero = !yAxis.ticks.beginAtZero;
    });
    this.unifiedChart.update();
  }

  sensorLinkOnClick(ID, granularity, serverURI) {
    this.sensorToPlot = ID;
    this.updateCharts(this.sensorToPlot, granularity, serverURI);
  }
};

// ######################################################################

// static functions
function enterKeyPressed(e) {
  return (e.keyCode ? e.keyCode : e.which) === 13;
}

function isInt(value) {
  return /^\d+$/.test(value);
}

// ######################################################################

module.exports = {
  'GeileTypenWetterApp': GeileTypenWetterApp,
  'enterKeyPressed': enterKeyPressed,
  'isInt': isInt,
};


},{}],3:[function(require,module,exports){
const SERVER_URI = 'http://localhost:3000';
const UPDATE_INTERVAL = 1000 * 60;// one minute

const TEMPERATURE_COLOR = 'rgb(204,0,112,0.7)';
const HUMIDITY_COLOR = 'rgb(0,39,191,0.6)';
const AIRPRESSURE_COLOR = 'rgb(0,204,109,0.8)';

module.exports = {
  'SERVER_URI': SERVER_URI,
  'UPDATE_INTERVAL': UPDATE_INTERVAL,
  'TEMPERATURE_COLOR': TEMPERATURE_COLOR,
  'AIRPRESSURE_COLOR': AIRPRESSURE_COLOR,
  'HUMIDITY_COLOR': HUMIDITY_COLOR,
};



},{}]},{},[1]);
