const controller = require('./GeileTypenWetterAppController');
const rp = require('./AppDateTimePicker');
const ac = require('./AppChart');

class GeileTypenWetterApp {
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
  sensorData = [];
  unifiedChart;

  // config
  temperatureColor = 'red';
  humidityColor = 'blue';
  airpressureColor = 'green';

  serverURI = 'localhost:3000';
  updateInterval = 1000 * 60;

  // datepicker
  dateTimeRangePickerElement = document.createElement('input');
  dateTimeRangePicker;
  resetRangeButton = document.createElement('button');

  constructor(serverURI) {
    this.serverURI = serverURI;
  }

  init() {
    this.granularity = this.granularityInput.value;

    this.yAxisToggleButton.addEventListener('click', ac.yAxisStartToggle.bind(this), false);
    this.resetRangeButton.addEventListener('click', () => {this.dateTimeRangePicker.reset(); this.updateDataOnPage()}, false);
    this.granularityInput.addEventListener('keydown', this.granularityOnChange.bind(this, this.granularityInput), false);

    this.createChartsForSensor(this.sensorToPlot, this.granularity, this.serverURI);

    this.dateTimeRangePicker = new rp.AppDateTimePicker(this.dateTimeRangePickerElement, this.resetRangeButton);

    this.dateTimeRangePicker.picker.on("apply.daterangepicker", (e, picker) => {
      this.dateTimeRangePicker.enabled = true;
      this.dateTimeRangePicker.toggleRangeSelectionActive();
      this.dateTimeRangePicker.update();
      this.updateChartsByPickedRange(picker.startDate, picker.endDate);
    });

    this.updateSensorsDropdown(this.granularity, this.dateTimeRangePicker.enabled, this.dateTimeRangePicker.start, this.dateTimeRangePicker.end, this.serverURI);
    setInterval(this.updateDataOnPage.bind(this), this.updateInterval);
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

  extractStartAndEndFromTimestamps(timestamps) {
    this.dateTimeRangePicker.start = timestamps[0];
    this.dateTimeRangePicker.end = timestamps[timestamps.length - 1];
  }

  updateChartsByPickedRange(start, end) {
    this.dateTimeRangePicker.start = start;
    this.dateTimeRangePicker.end = end;
    this.updateCharts(this.sensorToPlot, this.granularity, this.dateTimeRangePicker.enabled, this.dateTimeRangePicker.start, this.dateTimeRangePicker.end, this.serverURI);
  }


  createChartsForSensor(sensorToPlot, granularity, serverURI) {
    controller.getSensorDataFromServer(sensorToPlot, granularity, false, undefined, undefined, serverURI).then((data) => {
      const {timestamps, temperature, humidity, airPressure} = controller.mapValuesOfData(data);

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

      this.extractStartAndEndFromTimestamps(timestamps);

      this.unifiedChart = ac.createChart(this.chartCanvasElement, this.temperatureColor, this.airpressureColor, this.humidityColor);
      this.updateDataOnPage();
      controller.getSensorFromServer(sensorToPlot, serverURI).then((data) => {
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

  updateCharts(sensorToPlot, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI) {
    controller.getSensorDataFromServer(sensorToPlot, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI).then((data) => {
      const {timestamps, temperature, humidity, airPressure} = controller.mapValuesOfData(data);

      this.extractStartAndEndFromTimestamps(timestamps);
      this.dateTimeRangePicker.update();

      ac.updateChart(this.unifiedChart, timestamps, temperature, humidity, airPressure);

      controller.getSensorFromServer(sensorToPlot, serverURI).then((data) => {
        this.setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
      });
    });
  }

  updateSensorsDropdown(granularity, rangeEnabled, pickerStart, pickerEnd, serverURI) {
    controller.getSensorsFromServer(serverURI).then((data) => {
      this.sensorSelectDropdown.querySelectorAll('*').forEach((n) => n.remove());

      data.sensors.forEach((s) => {
        const sensorLink = document.createElement('a');
        sensorLink.classList.add('dropdown-item');
        sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
        sensorLink.onclick = this.sensorLinkOnClick.bind(this, parseInt(s.ID), granularity, rangeEnabled, pickerStart, pickerEnd, serverURI);
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
    this.updateCharts(this.sensorToPlot, this.granularity, this.dateTimeRangePicker.enabled, this.dateTimeRangePicker.start, this.dateTimeRangePicker.end, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.dateTimeRangePicker.enabled, this.dateTimeRangePicker.start, this.dateTimeRangePicker.end, this.serverURI);
  }

  sensorLinkOnClick(ID, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI) {
    this.sensorToPlot = ID;
    this.updateCharts(this.sensorToPlot, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI);
  }

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
