const controller = require('./GeileTypenWetterAppController');

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
  rangeEnabled = false;
  pickerStart;
  pickerEnd;
  resetRangeButton = document.createElement('button');

  constructor(serverURI) {
    this.serverURI = serverURI;
  }

  init() {
    this.granularity = this.granularityInput.value;

    this.yAxisToggleButton.addEventListener('click', this.yAxisStartToggle.bind(this), false);
    this.resetRangeButton.addEventListener('click', this.resetRangePicker.bind(this), false);
    this.granularityInput.addEventListener('keydown', this.granularityOnChange.bind(this, this.granularityInput), false);

    this.createChartsForSensor(this.sensorToPlot, this.granularity, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.rangeEnabled, this.pickerStart, this.pickerEnd, this.serverURI);
    setInterval(this.updateDataOnPage.bind(this), this.updateInterval);

    this.dateTimeRangePicker = this.createDateTimePicker(this.dateTimeRangePickerElement, this.resetRangeButton);
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
    this.pickerStart = timestamps[0];
    this.pickerEnd = timestamps[timestamps.length - 1];
  }

  updateChartsByPickedRange(start, end) {
    this.pickerStart = start;
    this.pickerEnd = end;
    this.updateCharts(this.sensorToPlot, this.granularity, this.rangeEnabled, this.pickerStart, this.pickerEnd, this.serverURI);
  }

  createDateTimePicker(dateTimeRangePickerElement, resetRangeButton) {
    //TODO check whether Max and Min Values are possible (doable but dynamic setting may be to difficult for the purpose)
    return $(dateTimeRangePickerElement).daterangepicker({
      opens: 'center',
      startDate: this.pickerStart,
      endDate: this.pickerEnd,
      timePicker: true,
      timePicker24Hour: true,
      applyButtonClasses: 'btn-green',
      cancelButtonClasses: 'btn-pink',
      locale: {
        format: 'DD.MM.YY HH:mm',
      },
    }, (start, end) => {
      this.rangeEnabled = true;
      this.toggleRangeSelectionActive(this.rangeEnabled, dateTimeRangePickerElement, resetRangeButton);
      this.updateChartsByPickedRange(start, end);
    });
  }

  toggleRangeSelectionActive(rangeEnabled, dateTimeRangePickerElement, resetRangeButton) {
    if (rangeEnabled) {
      dateTimeRangePickerElement.classList.add('bg-pink');
      resetRangeButton.classList.add('disabled');
    } else {
      dateTimeRangePickerElement.classList.remove('bg-pink');
      resetRangeButton.classList.remove('disabled');
    }
  }

  updateRangePicker() {
    this.dateTimeRangePicker.data('daterangepicker').setStartDate(this.pickerStart);
    this.dateTimeRangePicker.data('daterangepicker').setEndDate(this.pickerEnd);
  }

  resetRangePicker() {
    this.pickerStart = undefined;
    this.pickerEnd = undefined;
    this.rangeEnabled = false;
    this.updateDataOnPage();
    this.toggleRangeSelectionActive(this.rangeEnabled, this.dateTimeRangePickerElement, this.resetRangeButton);
  }

  createChart(chartCanvasElement, data, timestamps, tempValues, humidValues, airPressValues, tempColor, airPressColor, humidColor) {
    const chart = chartCanvasElement.getContext('2d');

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

      this.unifiedChart = this.createChart(this.chartCanvasElement, data, timestamps, tempValues, humidValues, airPressValues,
        this.temperatureColor, this.airpressureColor, this.humidityColor);
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

  updateChart(chart, timestamps, temperature, humidity, airPressure) {
    chart.data.labels = timestamps;
    chart.data.datasets[0].data = temperature;
    chart.data.datasets[1].data = humidity;
    chart.data.datasets[2].data = airPressure;
    chart.update();
  }

  updateCharts(sensorToPlot, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI) {
    controller.getSensorDataFromServer(sensorToPlot, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI).then((data) => {
      const {timestamps, temperature, humidity, airPressure} = controller.mapValuesOfData(data);

      this.extractStartAndEndFromTimestamps(timestamps);
      this.updateRangePicker();

      this.updateChart(this.unifiedChart, timestamps, temperature, humidity, airPressure);

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
    this.updateCharts(this.sensorToPlot, this.granularity, this.rangeEnabled, this.pickerStart, this.pickerEnd, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.rangeEnabled, this.pickerStart, this.pickerEnd, this.serverURI);
  }

  yAxisStartToggle() {
    this.unifiedChart.options.scales.yAxes.forEach((yAxis) => {
      yAxis.ticks.beginAtZero = !yAxis.ticks.beginAtZero;
    });
    this.unifiedChart.update();
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
