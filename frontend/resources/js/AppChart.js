const Chart = require('./chartjs/chart.min');

function updateChart(chart, timestamps, temperature, humidity, airPressure) {
    chart.data.labels = timestamps;
    chart.data.datasets[0].data = temperature;
    chart.data.datasets[1].data = humidity;
    chart.data.datasets[2].data = airPressure;
    chart.update();
}

function yAxisStartToggle(chart) {
    console.log(chart);
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

module.exports = {
    createChart: createChart,
    updateChart: updateChart,
    yAxisStartToggle, yAxisStartToggle
};