var temperatureChart, airPressureChart, humidityChart;

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
  let timestamps = data.sensorData.map(function(e) {
    return new Date(parseInt(e.TIMESTAMP)).toLocaleString('de-DE');
  });

  let temperature = data.sensorData.map(function(e) {
    return e.TEMPERATURE;
  });

  let airPressure = data.sensorData.map(function(e) {
    return e.AIRPRESSURE;
  });

  let humidity = data.sensorData.map(function(e) {
    return e.HUMIDITY;
  });
  return {timestamps, temperature, airPressure, humidity};
}

$.get('https://awe2-api.jeujeus.de/weatherData', function(data, status) {

  //TODO REMOVE ME FOR SHOWCASE ONLY
  console.log(data.sensorData);

  let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);

  temperatureChart = createChart('chartTemperature', data, temperature, timestamps, 'Temperature', 'rgba(0, 119, 204, 0.3)');
  airPressureChart = createChart('chartAirPressure', data, airPressure, timestamps, 'Air Pressure', 'rgb(0,204,109)');
  humidityChart = createChart('chartHumidity', data, humidity, timestamps, 'Humidity', 'rgb(204,0,112)');

});

function updateChart(chart, timestamps, values) {
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = values;
  chart.update();
}

function updateCharts() {

  //TODO REMOVE ME FOR SHOWCASE ONLY
  console.log('updating charts - ' + new Date().toLocaleTimeString());

  $.get('https://awe2-api.jeujeus.de/weatherData', function(data, status) {

    //TODO REMOVE ME FOR SHOWCASE ONLY
    console.log(data.sensorData);

    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);
    updateChart(temperatureChart, timestamps, temperature);
    updateChart(airPressureChart, timestamps, airPressure);
    updateChart(humidityChart, timestamps, humidity);
  });
}

// TODO CHANGE ME RUNNING EVERY 10 SECONDS IS TO MUCH
setInterval(updateCharts, 10000);

function yAxisStartToggle() {
  //TODO THERE MUST BE SOME DAMN BETTER WAY DOING THIS
  temperatureChart.options.scales.yAxes[0].ticks.beginAtZero = !temperatureChart.options.scales.yAxes[0].ticks.beginAtZero;
  temperatureChart.update();
  airPressureChart.options.scales.yAxes[0].ticks.beginAtZero = !airPressureChart.options.scales.yAxes[0].ticks.beginAtZero;
  airPressureChart.update();
  humidityChart.options.scales.yAxes[0].ticks.beginAtZero = !humidityChart.options.scales.yAxes[0].ticks.beginAtZero;
  humidityChart.update();
}
