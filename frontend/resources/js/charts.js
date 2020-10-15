let temperatureChart, airPressureChart, humidityChart;

const UPDATE_INTERVAL = 1000 * 60 * 5;
const SERVER_URI = 'https://awe2-api.jeujeus.de';

let sensorToPlot = 0;

createChartsForSensor(sensorToPlot);
updateSensorsDropdown();
setInterval(updateDataOnPage, UPDATE_INTERVAL);

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

function createChartsForSensor(sensorToPlot) {
  $.get(SERVER_URI + '/sensorData/id/' + sensorToPlot, function(data) {
    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);

    temperatureChart = createChart('chartTemperature', data, temperature, timestamps, 'Temperature', 'rgba(0, 119, 204, 0.3)');
    airPressureChart = createChart('chartAirPressure', data, airPressure, timestamps, 'Air Pressure', 'rgb(0,204,109)');
    humidityChart = createChart('chartHumidity', data, humidity, timestamps, 'Humidity', 'rgb(204,0,112)');

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

function updateChart(chart, timestamps, values) {
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = values;
  chart.update();
}

function updateCharts(sensorToPlot) {
  $.get(SERVER_URI + '/sensorData/id/' + sensorToPlot, function(data) {
    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);

    updateChart(temperatureChart, timestamps, temperature);
    updateChart(airPressureChart, timestamps, airPressure);
    updateChart(humidityChart, timestamps, humidity);

    $.get(SERVER_URI + '/sensor/id/' + sensorToPlot, function(data) {
      setValuesToBeDisplayed(data, temperature.slice(-1)[0], airPressure.slice(-1)[0], humidity.slice(-1)[0]);
    });
  });
}

function switchSensor(sensor) {
  // todo that's still ugly:(
  sensorToPlot = sensor;
  updateCharts(sensorToPlot);
}

function updateSensorsDropdown() {
  $.get(SERVER_URI + '/sensors/', function(data) {

    let sensorSelectDropdown = document.getElementById('sensorForChartDropdown');

    sensorSelectDropdown.querySelectorAll('*').forEach(n => n.remove());

    data.sensors.forEach(s => {
      let sensorLink = document.createElement('a');
      sensorLink.classList.add('dropdown-item');
      //TODO REPLACE ME WITH ALIAS
      sensorLink.textContent = `${s.ID} - ${s.LOCATION}`;
      sensorLink.onclick = function() {
        switchSensor(parseInt(s.ID));
      };
      sensorSelectDropdown.append(sensorLink);
    });

  });
}

function updateDataOnPage() {
  updateCharts(sensorToPlot);
  updateSensorsDropdown();
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
