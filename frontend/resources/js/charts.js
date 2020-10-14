let temperatureChart, airPressureChart, humidityChart;

const UPDATE_INTERVAL = 1000 * 60 * 5;
const SERVER_URI = 'https://awe2-api.jeujeus.de/weatherData';

let sensors;
let sensorToPlot = 0;

createChartsForSensor();
setInterval(updateCharts, UPDATE_INTERVAL);

function createChart(chartCanvasName, data, values, timestamps, label, color) {

  let chart = document.getElementById(chartCanvasName).getContext('2d');

  return new Chart(chart, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        label: label,
        data: values,
        backgroundColor: color,
      }],
    },
    options: {
      scales: {
        yAxes: [{
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

function mapValuesOfData(data, sensor) {
  let timestamps = data.sensorData.flatMap(
    e => (e.SENSOR_ID === sensor) ? new Date(parseInt(e.TIMESTAMP)).toLocaleString('de-DE') : []);

  let temperature = data.sensorData.flatMap(
    e => (e.SENSOR_ID === sensor) ? e.TEMPERATURE : []);

  let airPressure = data.sensorData.flatMap(
    e => (e.SENSOR_ID === sensor) ? e.AIRPRESSURE : []);

  let humidity = data.sensorData.flatMap(
    e => (e.SENSOR_ID === sensor) ? e.HUMIDITY : []);

  return {timestamps, temperature, airPressure, humidity};
}

function createChartsForSensor() {
  $.get(SERVER_URI, function(data, status) {

    sensors = data.sensors;
    updateSensorsDropdown();

    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data, sensorToPlot);

    temperatureChart = createChart('chartTemperature', data, temperature, timestamps, 'Temperature', 'rgba(0, 119, 204, 0.3)');
    airPressureChart = createChart('chartAirPressure', data, airPressure, timestamps, 'Air Pressure', 'rgb(0,204,109)');
    humidityChart = createChart('chartHumidity', data, humidity, timestamps, 'Humidity', 'rgb(204,0,112)');

    setValuesToBeDisplayed(sensors[sensorToPlot], temperature.slice(-1)[0], airPressure.slice(-1)[0], humidity.slice(-1)[0]);
  });
}

function setValuesToBeDisplayed(sensor, tempNow, airPressNow, humidNow) {
  document.getElementById('sensorPlotting').innerText = sensor.ID;
  document.getElementById('temperatureNow').innerText = tempNow.toFixed(2) + '°C';
  document.getElementById('airPressureNow').innerText = airPressNow.toFixed(2) + 'mbar';
  document.getElementById('humidityNow').innerText = humidNow.toFixed(2) + '%';
}

function updateChart(chart, timestamps, values) {
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = values;
  chart.update();
}

function updateCharts() {
  $.get(SERVER_URI, function(data, status) {

    sensors = data.sensors;
    updateSensorsDropdown();

    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data, sensorToPlot);

    updateChart(temperatureChart, timestamps, temperature);
    updateChart(airPressureChart, timestamps, airPressure);
    updateChart(humidityChart, timestamps, humidity);

    setValuesToBeDisplayed(sensors[sensorToPlot], temperature.slice(-1)[0], airPressure.slice(-1)[0], humidity.slice(-1)[0]);
  });
}

function switchSensor(sensor) {
  sensorToPlot = sensor;
  updateCharts();
}

function updateSensorsDropdown() {
  let sensorSelectDropdown = document.getElementById('sensorForChartDropdown');

  sensorSelectDropdown.querySelectorAll('*').forEach(n => n.remove());

  sensors.forEach(s => {
    let sensorLink = document.createElement('a');
    sensorLink.classList.add('dropdown-item');
    //TODO REPLACE ME WITH ALIAS
    sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
    sensorLink.onclick = function() {
      switchSensor(parseInt(s.ID));
    };
    sensorSelectDropdown.append(sensorLink);
  });
}

function yAxisStartToggle() {
  //TODO THERE MUST BE SOME DAMN BETTER WAY DOING THIS
  temperatureChart.options.scales.yAxes[0].ticks.beginAtZero = !temperatureChart.options.scales.yAxes[0].ticks.beginAtZero;
  temperatureChart.update();
  airPressureChart.options.scales.yAxes[0].ticks.beginAtZero = !airPressureChart.options.scales.yAxes[0].ticks.beginAtZero;
  airPressureChart.update();
  humidityChart.options.scales.yAxes[0].ticks.beginAtZero = !humidityChart.options.scales.yAxes[0].ticks.beginAtZero;
  humidityChart.update();
}
