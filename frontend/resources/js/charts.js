import {
  AIRPRESSURE_COLOR,
  HUMIDITY_COLOR,
  SERVER_URI,
  TEMPERATURE_COLOR,
  UPDATE_INTERVAL,
} from './constants.js';

class geileTypenWetterApp {
  constructor(granularityInputSelector, temperatureColor, airPressureColor, humidityColor, serverURI, updateInterval) {

    // DOM - Elements
    // TODO make selectors given to constructors like granularityInputSelector -> reusability and cleaner
    this.granularityInput = document.querySelector(granularityInputSelector);
    this.yAxisToggleButton = document.querySelector('#yAxisToggleButton');
    this.sensorPlotting = document.getElementById('sensorPlotting');
    this.sensorPlottingLocation = document.getElementById('sensorPlottingLocation');
    this.temperatureNow = document.getElementById('temperatureNow');
    this.humidityNow = document.getElementById('humidityNow');
    this.airPressureNow = document.getElementById('airPressureNow');
    this.sensorSelectDropdown = document.getElementById('sensorForChartDropdown');
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

    let chart = document.getElementById(chartCanvasName).getContext('2d');

    //TODO REFACTOR ME INTO OWN CLASS?
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
              callback: function (value) {
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
              callback: function (value) {
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

  mapValuesOfData(data) {
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

  createChartsForSensor(sensorToPlot, granularity, serverURI) {
    $.get(serverURI + '/sensorData/id/' + sensorToPlot, (data) => {
      //todo move back to backend
      data.sensorData = reduceElementsToMaxSize(data.sensorData, granularity);

      let {timestamps, temperature, humidity, airPressure} = this.mapValuesOfData(data);

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
    $.get(serverURI + '/sensorData/id/' + sensorToPlot, (data) => {
      //todo move back to backend
      data.sensorData = reduceElementsToMaxSize(data.sensorData, granularity);

      let {timestamps, temperature, humidity, airPressure} = this.mapValuesOfData(data);

      this.updateChart(this.unifiedChart, timestamps, temperature, humidity, airPressure);

      $.get(serverURI + '/sensor/id/' + sensorToPlot, (data) => {
        this.setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
      });
    });
  }

  updateSensorsDropdown(granularity, serverURI) {
    $.get(serverURI + '/sensors/', (data) => {

      this.sensorSelectDropdown.querySelectorAll('*').forEach(n => n.remove());

      data.sensors.forEach(s => {
        let sensorLink = document.createElement('a');
        sensorLink.classList.add('dropdown-item');
        //TODO REPLACE ME WITH ALIAS
        sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
        sensorLink.onclick = this.sensorLinkOnClick.bind(this, parseInt(s.ID), granularity, serverURI);
        this.sensorSelectDropdown.append(sensorLink);
      });

    });
  }

  granularityOnChange(input, e) {
    if (EnterKeyPressed(e) && isInt(input.value)) {
      e.preventDefault();
      let newGranularity = parseInt(input.value);
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
    //TODO THERE MUST BE SOME DAMN BETTER WAY DOING THIS
    this.unifiedChart.options.scales.yAxes[0].ticks.beginAtZero = !this.unifiedChart.options.scales.yAxes[0].ticks.beginAtZero;
    this.unifiedChart.options.scales.yAxes[1].ticks.beginAtZero = !this.unifiedChart.options.scales.yAxes[1].ticks.beginAtZero;
    this.unifiedChart.options.scales.yAxes[2].ticks.beginAtZero = !this.unifiedChart.options.scales.yAxes[2].ticks.beginAtZero;
    this.unifiedChart.update();
  }

  sensorLinkOnClick(ID, granularity, serverURI){
    this.sensorToPlot = ID;
    this.updateCharts(this.sensorToPlot, granularity, serverURI);
  }
}
// ######################################################################

// static functions
//todo move back to backend
function reduceElementsToMaxSize(elements, maxSize){
  if (elements.length <= maxSize) return elements;
  let orig_size = elements.length;
  return Array.from({length: maxSize}, (_, i) =>
      elements[Math.floor(i * (orig_size + Math.floor(orig_size/maxSize))/maxSize)]);
}

function EnterKeyPressed(e) {
  return (e.keyCode ? e.keyCode : e.which) === 13;
}

function isInt(value) {
  return /^\d+$/.test(value);
}
// ######################################################################

// creating app
let app = new geileTypenWetterApp('#granularity', TEMPERATURE_COLOR, AIRPRESSURE_COLOR, HUMIDITY_COLOR, SERVER_URI, UPDATE_INTERVAL);
app.init();
