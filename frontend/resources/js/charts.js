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
  });
}

function convertTimeFormat(timestamps) {
  for (let i = 0; i < timestamps.length; i++) {
    var a = new Date(timestamps[i] * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    timestamps[i] = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  }
  return timestamps;
}

function mapValuesOfData(data) {
  let theBeginning = data.sensorData[0].TIMESTAMP;
  let timestamps = data.sensorData.map(function(e) {
    return e.TIMESTAMP - theBeginning;
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
  timestamps = convertTimeFormat(timestamps);
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

  console.log('updating charts - ' + new Date().toLocaleTimeString());

  $.get('https://awe2-api.jeujeus.de/weatherData', function(data, status) {

    //TODO REMOVE ME FOR SHOWCASE ONLY
    console.log(data.sensorData);

    let {timestamps, temperature, airPressure, humidity} = mapValuesOfData(data);
    timestamps = convertTimeFormat(timestamps);
    updateChart(temperatureChart, timestamps, temperature);
    updateChart(airPressureChart, timestamps, airPressure);
    updateChart(humidityChart, timestamps, humidity);
  });
}

// TODO CHANGE ME RUNNING EVERY 10 SECONDS IS TO MUCH
setInterval(updateCharts, 100000);
