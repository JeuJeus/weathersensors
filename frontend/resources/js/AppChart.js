const Chart = require('./chartjs/chart.min');

Chart.plugins.register({
  beforeInit: responsiveForMobile,
  resize: responsiveForMobile,
});

function responsiveForMobile(chart) {
  if (!(chart.width > 500)) {
    chart.options.legend.display = false;
    chart.options.scales.xAxes[0].ticks.display = false;
    chart.options.scales.yAxes[2].ticks.callback = value => value;
  } else {
    chart.options.legend.display = true;
    chart.options.scales.xAxes[0].ticks.display = true;
    chart.options.scales.yAxes[2].ticks.callback = value => value + ' mbar';
  }
}

function updateChart(chart, timestamps, temperature, humidity, airPressure) {
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = temperature;
  chart.data.datasets[1].data = humidity;
  chart.data.datasets[2].data = airPressure;
  chart.update();
}

function yAxisStartToggle(chart) {
    chart.options.scales.yAxes.forEach((yAxis) => {
        yAxis.ticks.beginAtZero = !yAxis.ticks.beginAtZero;
    });
    chart.update();
}

function createChart(canvas, tempColor, airPressColor, humidColor) {
    const chart = canvas.getContext('2d');
    return new Chart(chart, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                yAxisID: 'temp',
                label: 'Temperature',
                data: [],
                borderColor: tempColor,
            }, {
                yAxisID: 'humid',
                label: 'Humidity',
                data: [],
                borderColor: humidColor,
            }, {
                yAxisID: 'air',
                label: 'Air Pressure',
                data: [],
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
                      callback: value => value + '°C',
                    },
                }, {
                    id: 'humid',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                      fontColor: humidColor,
                      beginAtZero: false,
                      callback: value => value + '%',
                    },
                }, {
                    id: 'air',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                      fontColor: airPressColor,
                      beginAtZero: false,
                      callback: value => value + ' mbar',
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

module.exports = {
  createChart,
  updateChart,
  yAxisStartToggle,
};
