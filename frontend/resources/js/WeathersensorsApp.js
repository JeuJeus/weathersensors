const controller = require('./WeathersensorsAppController');
const rp = require('./AppDateTimePicker');
const ac = require('./AppChart');
const at = require('./AppTrend');
const constants = require('./Constants');
const alert = require('./Alert');
const darkmode = require('./Darkmode');
const env = require('../../src/env');

class WeathersensorsApp {
  // DOM - Elements
  granularityInput = document.createElement('input');
  yAxisToggleButton = document.createElement('button');
  sensorPlotting = document.createElement('h3');
  sensorPlottingLocation = document.createElement('span');
  temperatureNow = document.createElement('h3');
  humidityNow = document.createElement('h3');
  airPressureNow = document.createElement('h3');
  temperatureTrend = document.createElement('div');
  humidityTrend = document.createElement('div');
  airPressureTrend = document.createElement('div');
  sensorSelectDropdown = document.createElement('div');
  chartCanvasElement = document.createElement('canvas');
  darkmodeButton = document.createElement('button');
  darkmodeIcon = document.createElement('i');
  pagestyleTag = document.createElement('link');

  // current state
  granularity = 100;
  latestDatapointsAmount = 5;
  sensorToPlot = 1;
  sensors = [];
  sensorData = {
    timestamps: [],
    temperature: [],
    humidity: [],
    airPressure: [],
  };
  unifiedChart;

  // config
  temperatureColor = 'red';
  humidityColor = 'blue';
  airpressureColor = 'green';

  serverURI = 'localhost:3000';
  updateInterval = 1000 * 60;
  nodeMcuSendInterval = 5;

  // datepicker
  dateTimeRangePickerElement = document.createElement('input');
  dateTimeRangePicker;
  resetRangeButton = document.createElement('button');

  constructor(serverURI) {
    this.serverURI = serverURI;
  }

  async init() {
    darkmode.checkIfDarkmodeSetAndEnableThen(this.pagestyleTag, this.darkmodeIcon);

    this.granularityInput.value = this.granularity;
    this.yAxisToggleButton.addEventListener('click', () => {
      ac.yAxisStartToggle(this.unifiedChart);
    }, false);
    this.resetRangeButton.addEventListener('click', this.resetRangeButtonOnClick.bind(this), false);
    this.granularityInput.addEventListener('keydown', this.granularityOnChange.bind(this, this.granularityInput), false);
    this.darkmodeButton.addEventListener('click', darkmode.onDarkmodeButtonPress.bind(this, this.pagestyleTag, this.darkmodeButton, this.darkmodeIcon), false);

    this.unifiedChart = ac.createChart(this.chartCanvasElement, this.temperatureColor, this.airpressureColor, this.humidityColor);

    this.dateTimeRangePicker = new rp.AppDateTimePicker(this.dateTimeRangePickerElement, this.resetRangeButton, () => {
      this.update();
    });
    setInterval(this.update.bind(this), this.updateInterval);
    await this.update();
  }

  setDomElements(granularityInputSelector, yAxisToggleSelector, sensorPlottingSelector, sensorPlotLocationSelector, temperatureNowSelector,
                 humidityNowSelector, airPressureNowSelector, temperatureTrendSelector, humidityTrendSelector, airPressureTrendSelector,
                 sensorDropdownSelector, resetRangeButtonSelector, chartCanvasSelector, dateTimeRangePickerSelector, darkmodeButtonSelector, darkModeIconSelector, pagestyleTagSelector) {
    this.granularityInput = document.querySelector(granularityInputSelector);
    this.yAxisToggleButton = document.querySelector(yAxisToggleSelector);
    this.sensorPlotting = document.querySelector(sensorPlottingSelector);
    this.sensorPlottingLocation = document.querySelector(sensorPlotLocationSelector);
    this.temperatureNow = document.querySelector(temperatureNowSelector);
    this.humidityNow = document.querySelector(humidityNowSelector);
    this.airPressureNow = document.querySelector(airPressureNowSelector);
    this.temperatureTrend = document.querySelector(temperatureTrendSelector);
    this.humidityTrend = document.querySelector(humidityTrendSelector);
    this.airpressureTrend = document.querySelector(airPressureTrendSelector);
    this.sensorSelectDropdown = document.querySelector(sensorDropdownSelector);
    this.resetRangeButton = document.querySelector(resetRangeButtonSelector);
    this.chartCanvasElement = document.querySelector(chartCanvasSelector);
    this.dateTimeRangePickerElement = document.querySelector(dateTimeRangePickerSelector);
    this.darkmodeButton = document.querySelector(darkmodeButtonSelector);
    this.darkmodeIcon = document.querySelector(darkModeIconSelector);
    this.pagestyleTag = document.querySelector(pagestyleTagSelector);
  }

  updateLatestValues(sensor, tempNow, humidNow, airPressNow) {
    this.sensorPlotting.innerText = sensor.ID;
    this.sensorPlottingLocation.innerText = sensor.LOCATION ? sensor.LOCATION : '';
    this.temperatureNow.innerText = tempNow ? tempNow.toFixed(2) + '°C' : '';
    this.humidityNow.innerText = humidNow ? humidNow.toFixed(2) + '%' : '';
    this.airPressureNow.innerText = airPressNow ? airPressNow.toFixed(2) + 'mbar' : '';
  }

  async updateSensorsDropdown() {
    this.sensorSelectDropdown.querySelectorAll('*').forEach((n) => n.remove());

    this.sensors.forEach((s) => {
      const sensorLink = document.createElement('a');
      sensorLink.classList.add('dropdown-item');
      sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
      sensorLink.onclick = this.sensorLinkOnClick.bind(this, parseInt(s.ID));
      this.sensorSelectDropdown.append(this.setLastUpdatedStatusForDropdownItem(s, sensorLink));
    });
  }

  setLastUpdatedStatusForDropdownItem(s, sensorLink) {
    const color = this.getTrafficLightClassBasedOnUpdateAge(s.LAST_UPDATE);
    sensorLink.prepend(this.createLastUpdatedDot(color));
    return sensorLink;
  }

  getTrafficLightClassBasedOnUpdateAge(timestamp) {
    const differenceInMinutes = Math.floor((Date.now() - timestamp) / 1000 / 60);
    if (differenceInMinutes < (this.nodeMcuSendInterval * 2)) {
      return {
        class: constants.TRAFFIC_LIGHT_CLASSES.GREEN,
        tooltip: `Sensor is active`,
      };
    } else if ((this.nodeMcuSendInterval * 2) <= differenceInMinutes && differenceInMinutes <= (this.nodeMcuSendInterval * 4)) {
      return {
        class: constants.TRAFFIC_LIGHT_CLASSES.YELLOW,
        tooltip: `Sensor was last seen ${new Date(timestamp).toLocaleString(env.LOCALE)}`,
      };
    } else {
      return {
        class: constants.TRAFFIC_LIGHT_CLASSES.RED,
        tooltip: `Sensor was last seen ${new Date(timestamp).toLocaleString(env.LOCALE)}`,
      };
    }
  }

  createLastUpdatedDot(color) {
    const dot = document.createElement('i');
    dot.classList.add('fas', 'fa-circle', color.class);
    dot.title = color.tooltip;
    return dot;
  }

  updateDateTimeRangePicker() {
    if (!this.dateTimeRangePicker.enabled) {
      this.dateTimeRangePicker.start = this.sensorData.timestamps[0];
      this.dateTimeRangePicker.end = this.sensorData.timestamps[this.sensorData.timestamps.length - 1];
    }
    this.dateTimeRangePicker.update();
  }

  async update() {
    this.sensorData = controller.mapValuesOfData(await controller.getSensorDataFromServer(this.sensorToPlot, this.granularity,
      this.dateTimeRangePicker.enabled, this.dateTimeRangePicker.start, this.dateTimeRangePicker.end, this.serverURI));
    this.sensors = (await controller.getSensorsFromServer(this.serverURI)).sensors;
    const sensor = (await controller.getSensorFromServer(this.sensorToPlot, this.serverURI)).sensor;
    this.updateUI(sensor);

  }

  updateUI(sensor) {
    this.updateDateTimeRangePicker();
    this.updateLatestValues(sensor, this.sensorData.temperature.slice(-1)[0], this.sensorData.humidity.slice(-1)[0], this.sensorData.airPressure.slice(-1)[0]);
    ac.updateChart(this.unifiedChart, this.sensorData.timestamps, this.sensorData.temperature, this.sensorData.humidity, this.sensorData.airPressure);
    at.updateTrends(this.sensorData, this.granularity, this.temperatureTrend, this.humidityTrend, this.airpressureTrend);
    this.updateSensorsDropdown();
  }

//  ###### event listeners ######
  granularityOnChange(input, e) {
    if (enterKeyPressed(e) && isInt(input.value)) {
      e.preventDefault();
      const newGranularity = parseInt(input.value);
      if (newGranularity !== this.granularity && newGranularity > 1) {
        this.granularity = parseInt(input.value, 10);
        this.update(this.sensorToPlot, this.granularity, this.serverURI);
      }
    }
  }

  resetRangeButtonOnClick() {
    this.dateTimeRangePicker.reset();
    this.update();
  }


  assureDateRangeNotEmptyElseResetAndAlert() {
    if (this.sensorData.timestamps.length === 0) {
      if (!this.dateTimeRangePicker.enabled) {
        //should not occure -> sensor should not be in database without data
        alert.showAndDismissAlert('danger', 'No Data Points found in Database for Sensor!');
      } else {
        alert.showAndDismissAlert('danger', 'No Data Points for selected range found - Range was reset!');
        this.resetRangeButtonOnClick();
      }
    }
  }

  async sensorLinkOnClick(ID) {
    this.sensorToPlot = ID;
    await this.update();
    this.assureDateRangeNotEmptyElseResetAndAlert();
  }

  // ### setters to override default values ### //
  setColors(temperatureColor, airPressureColor, humidityColor) {
    this.temperatureColor = temperatureColor;
    this.humidityColor = humidityColor;
    this.airpressureColor = airPressureColor;
  }

  setUpdateInterval(updateInterval) {
    this.updateInterval = updateInterval;
  }

  setNodeMcuSendInterval(nodeMcuSendInterval) {
    this.nodeMcuSendInterval = nodeMcuSendInterval;
  }

  setNumberOfDatapointsForRegression(latestDatapointsAmount) {
    this.latestDatapointsAmount = latestDatapointsAmount;
  }
}

// ######################################################################

// static functions
function enterKeyPressed(e) {
  return e.key === 'Enter';
}

function isInt(value) {
  return /^\d+$/.test(value);
}

// ######################################################################

module.exports = {
  WeathersensorsApp,
  enterKeyPressed,
  isInt,
};
