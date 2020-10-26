class GeileTypenWetterApp {
  // DOM - Elements
  granularityInput;
  yAxisToggleButton;
  sensorPlotting;
  sensorPlottingLocation;
  temperatureNow;
  humidityNow;
  airPressureNow;
  sensorSelectDropdown;

  // current state
  granularity;
  sensorToPlot;
  sensors = [];
  sensorData = [];
  unifiedChart;

  // config
  temperatureColor;
  humidityColor;
  airpressureColor;

  serverURI = 'localhost';
  updateInterval = 1000 * 60;
  constructor(serverURI,
      granularityInputSelector, yAxisToggleSelector, sensorPlottingSelector, sensorPlotLocationSelector, temperatureNowSelector,
      humidityNowSelector, airPressureNowSelector, sensorDropdownSelector, rangePickerSelector) {
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

    // config
    this.serverURI = serverURI;

    this.rangePickerSelector = rangePickerSelector;
    this.rangePicker = undefined;
    this.pickerStart = undefined;
    this.pickerEnd = undefined;
  }

  init() {
    this.yAxisToggleButton.addEventListener('click', this.yAxisStartToggle.bind(this), false);

    this.granularityInput.addEventListener('keydown', this.granularityOnChange.bind(this, this.granularityInput), false);

    this.createChartsForSensor(this.sensorToPlot, this.granularity, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.pickerStart, this.pickerEnd, this.serverURI);
    setInterval(this.updateDataOnPage.bind(this), this.updateInterval);
  }

  extractStartAndEndFromTimestamps(timestamps) {
    this.pickerStart = timestamps[0];
    this.pickerEnd = timestamps[timestamps.length - 1];
  }

  updateChartsByPickedRange(start, end) {
    this.pickerStart = start;
    this.pickerEnd = end;
    this.updateCharts(this.sensorToPlot, this.granularity, this.pickerStart, this.pickerEnd, this.serverURI);
  }

  createDateTimePicker(dateTimeRangePicker) {
    this.rangePicker = $(`input[name=${dateTimeRangePicker}]`).daterangepicker({
      opens: 'center',
      startDate: this.pickerStart,
      endDate: this.pickerEnd,
      timePicker: true,
      locale: {
        format: 'DD.MM.YY hh:mm',
      },
    }, (start, end, label) => {
      this.updateChartsByPickedRange(start, end);
    });
  }

  updateRangePicker() {
    this.rangePicker.data('daterangepicker').setStartDate(this.pickerStart);
    this.rangePicker.data('daterangepicker').setEndDate(this.pickerEnd);
  }

  createChart(chartCanvasName, data, timestamps, tempValues, humidValues, airPressValues, tempColor, airPressColor, humidColor) {
    const chart = document.getElementById(chartCanvasName).getContext('2d');

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
      // TODO MAYBE TRY TO INSERT TIMESTAMP * 1000 into DB
      // factor 1000 is needed here in order to convert from unix based on seconds to unix timestamp based on milliseconds
      (e) => new Date(parseFloat(e.TIMESTAMP) * 1000).toLocaleString('de-DE'),
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

      this.extractStartAndEndFromTimestamps(timestamps);
      this.createDateTimePicker(this.rangePickerSelector);

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

  createUpdateQuery(granularity, timeRangeStart, timeRangeEnd) {
    let query = {};
    query['granularity'] = granularity;
    if (isAssigned(timeRangeStart)) {
      query['timerange_start'] = moment(timeRangeStart, 'DD.MM.YYYY, hh:mm:ss').unix();
    }
    if (isAssigned(timeRangeEnd)) {
      query['timerange_end'] = moment(timeRangeEnd, 'DD.MM.YYYY, hh:mm:ss').unix();
    }
    return query;
  }

  updateCharts(sensorToPlot, granularity, timeRangeStart, timeRangeEnd, serverURI) {
    let updateQuery = this.createUpdateQuery(granularity, timeRangeStart, timeRangeEnd);
    $.get(serverURI + '/sensorData/id/' + sensorToPlot, updateQuery, (data) => {
      const {timestamps, temperature, humidity, airPressure} = this.mapValuesOfData(data);

      this.extractStartAndEndFromTimestamps(timestamps);
      this.updateRangePicker();

      this.updateChart(this.unifiedChart, timestamps, temperature, humidity, airPressure);

      $.get(serverURI + '/sensor/id/' + sensorToPlot, (data) => {
        this.setValuesToBeDisplayed(data.sensor, temperature.slice(-1)[0], humidity.slice(-1)[0], airPressure.slice(-1)[0]);
      });
    });
  }

  updateSensorsDropdown(granularity, pickerStart, pickerEnd, serverURI) {
    $.get(serverURI + '/sensors/', (data) => {
      this.sensorSelectDropdown.querySelectorAll('*').forEach((n) => n.remove());

      data.sensors.forEach((s) => {
        const sensorLink = document.createElement('a');
        sensorLink.classList.add('dropdown-item');
        sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
        sensorLink.onclick = this.sensorLinkOnClick.bind(this, parseInt(s.ID), granularity, pickerStart, pickerEnd, serverURI);
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
    this.updateCharts(this.sensorToPlot, this.granularity, this.pickerStart, this.pickerEnd, this.serverURI);
    this.updateSensorsDropdown(this.granularity, this.pickerStart, this.pickerEnd, this.serverURI);
  }

  yAxisStartToggle() {
    this.unifiedChart.options.scales.yAxes.forEach((yAxis) => {
      yAxis.ticks.beginAtZero = !yAxis.ticks.beginAtZero;
    });
    this.unifiedChart.update();
  }

  sensorLinkOnClick(ID, granularity, timeRangeStart, timeRangeEnd, serverURI) {
    this.sensorToPlot = ID;
    this.updateCharts(this.sensorToPlot, granularity, timeRangeStart, timeRangeEnd, serverURI);
  }

  setColors(temperatureColor, airPressureColor, humidityColor){
    this.temperatureColor = temperatureColor;
    this.humidityColor = humidityColor;
    this.airpressureColor = airPressureColor;
  }

  setUpdateInterval(updateInterval){
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

function isAssigned(varToCheck) {
  return ((typeof (varToCheck) !== 'undefined') && (varToCheck !== null));
}

// ######################################################################

module.exports = {
  'GeileTypenWetterApp': GeileTypenWetterApp,
  'enterKeyPressed': enterKeyPressed,
  'isInt': isInt,
};
