const controller = require('./GeileTypenWetterAppController');
const rp = require('./AppDateTimePicker');
const ac = require('./AppChart');

class GeileTypenWetterApp {
  // TODO FIXME EVERYTHING switch sensors bricks daterange
  // DOM - Elements
  granularityInput = document.createElement('input');
  yAxisToggleButton = document.createElement('button');
  sensorPlotting = document.createElement('h3');
  sensorPlottingLocation = document.createElement('span');
  temperatureNow = document.createElement('h3');
  humidityNow = document.createElement('h3');
  airPressureNow = document.createElement('h3');
  sensorSelectDropdown = document.createElement('h3');
  chartCanvasElement = document.createElement('canvas');

  // current state
  granularity = 50;
  sensorToPlot = 1;
  sensors = [];
  sensorData = {
    timestamps: [],
    temperature: [],
    humidity: [],
    airPressure: []
  };
  unifiedChart;

  // config
  temperatureColor = 'red';
  humidityColor = 'blue';
  airpressureColor = 'green';

  serverURI = 'localhost:3000';
  updateInterval = 1000 * 60;
  sendIntervalEsp = 5;

  // datepicker
  dateTimeRangePickerElement = document.createElement('input');
  dateTimeRangePicker;
  resetRangeButton = document.createElement('button');

  constructor(serverURI) {
    this.serverURI = serverURI;
  }

  init() {
    this.granularity = this.granularityInput.value;

    this.yAxisToggleButton.addEventListener('click', () => {ac.yAxisStartToggle(this.unifiedChart)}, false);
    this.resetRangeButton.addEventListener('click',  this.resetRangeButtonOnClick.bind(this), false);
    this.granularityInput.addEventListener('keydown', this.granularityOnChange.bind(this, this.granularityInput), false);

    this.unifiedChart = ac.createChart(this.chartCanvasElement, this.temperatureColor, this.airpressureColor, this.humidityColor);

    this.dateTimeRangePicker = new rp.AppDateTimePicker(this.dateTimeRangePickerElement, this.resetRangeButton, () => {
      this.update();
    });

    setInterval(this.update.bind(this), this.updateInterval);
    this.update();
  }

  setDomElements(granularityInputSelector, yAxisToggleSelector, sensorPlottingSelector, sensorPlotLocationSelector, temperatureNowSelector,
    humidityNowSelector, airPressureNowSelector, sensorDropdownSelector, resetRangeButtonSelector, chartCanvasSelector, dateTimeRangePickerSelector) {
    this.granularityInput = document.querySelector(granularityInputSelector);
    this.yAxisToggleButton = document.querySelector(yAxisToggleSelector);
    this.sensorPlotting = document.querySelector(sensorPlottingSelector);
    this.sensorPlottingLocation = document.querySelector(sensorPlotLocationSelector);
    this.temperatureNow = document.querySelector(temperatureNowSelector);
    this.humidityNow = document.querySelector(humidityNowSelector);
    this.airPressureNow = document.querySelector(airPressureNowSelector);
    this.sensorSelectDropdown = document.querySelector(sensorDropdownSelector);
    this.resetRangeButton = document.querySelector(resetRangeButtonSelector);
    this.chartCanvasElement = document.querySelector(chartCanvasSelector);
    this.dateTimeRangePickerElement = document.querySelector(dateTimeRangePickerSelector);
  }

  updateLatestValues(sensor, tempNow, humidNow, airPressNow) {
    this.sensorPlotting.innerText = sensor.ID;
    this.sensorPlottingLocation.innerText = sensor.LOCATION ? sensor.LOCATION : '';
    this.temperatureNow.innerText = tempNow.toFixed(2) + '°C';
    this.humidityNow.innerText = humidNow.toFixed(2) + '%';
    this.airPressureNow.innerText = airPressNow.toFixed(2) + 'mbar';
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
    const color = this.getTrafficLightBasedOnUpdateAge(s.LAST_UPDATE);
    sensorLink.prepend(this.createLastUpdatedDot(color));
    return sensorLink;
  }

  getTrafficLightBasedOnUpdateAge(timestamp) {
    const nowSeconds = Math.floor(Date.now() / 1000);
    const differenceInMinutes = Math.floor(nowSeconds - timestamp) / 60;
    if (differenceInMinutes < (this.sendIntervalEsp * 2)) {//under 10 minutes -> everything good = green
      return 'greenTrafficLight';
    } else if ((this.sendIntervalEsp * 2) <= differenceInMinutes <= (this.sendIntervalEsp * 4)) {//10-20minutes -> ok = yellow
      return 'yellowTrafficLight';
    } else if ((this.sendIntervalEsp * 4) < differenceInMinutes) {//older than 20 minutes -> not ok = red
      return 'redTrafficLight';
    }
  }

  createLastUpdatedDot(color) {
    const dot = document.createElement('i');
    dot.classList.add('fas', 'fa-circle', color);
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
    this.update()
  }

  sensorLinkOnClick(ID) {
    this.sensorToPlot = ID;
    this.update();
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
  'GeileTypenWetterApp': GeileTypenWetterApp,
  'enterKeyPressed': enterKeyPressed,
  'isInt': isInt,
};
