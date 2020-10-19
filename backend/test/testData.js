const testSensorData = JSON.parse('{\n' +
    '    "sensorData": [\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680091705.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.216248,\n' +
    '            "HUMIDITY": 51.005859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680097742.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.201477,\n' +
    '            "HUMIDITY": 51.003906\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680103784.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.232178,\n' +
    '            "HUMIDITY": 51.015625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680109848.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.227783,\n' +
    '            "HUMIDITY": 51.026367\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680115884.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.229858,\n' +
    '            "HUMIDITY": 51.107422\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680121935.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.234192,\n' +
    '            "HUMIDITY": 51.0625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680127971.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.216736,\n' +
    '            "HUMIDITY": 51.0625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680134008.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.194092,\n' +
    '            "HUMIDITY": 51.073242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680140052.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.212341,\n' +
    '            "HUMIDITY": 51.016602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680146091.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.235962,\n' +
    '            "HUMIDITY": 51.074219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680152131.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.230713,\n' +
    '            "HUMIDITY": 51.02832\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680158171.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.230713,\n' +
    '            "HUMIDITY": 51.051758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680164206.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.240479,\n' +
    '            "HUMIDITY": 51.106445\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680170251.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.215942,\n' +
    '            "HUMIDITY": 51.368164\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680176287.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.25531,\n' +
    '            "HUMIDITY": 51.426758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680182322.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.228271,\n' +
    '            "HUMIDITY": 51.379883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680188360.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.228271,\n' +
    '            "HUMIDITY": 51.379883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680194397.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.215942,\n' +
    '            "HUMIDITY": 51.414062\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680200436.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.214233,\n' +
    '            "HUMIDITY": 51.424805\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680206475.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.190063,\n' +
    '            "HUMIDITY": 51.402344\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680212512.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.220337,\n' +
    '            "HUMIDITY": 51.037109\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680218549.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.221558,\n' +
    '            "HUMIDITY": 48.504883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680224588.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.22998,\n' +
    '            "HUMIDITY": 48.411133\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680230625.0",\n' +
    '            "TEMPERATURE": 20.51,\n' +
    '            "AIRPRESSURE": 1002.250916,\n' +
    '            "HUMIDITY": 48.009766\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680236665.0",\n' +
    '            "TEMPERATURE": 20.49,\n' +
    '            "AIRPRESSURE": 1002.227173,\n' +
    '            "HUMIDITY": 48.12207\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680242700.0",\n' +
    '            "TEMPERATURE": 20.469999,\n' +
    '            "AIRPRESSURE": 1002.212952,\n' +
    '            "HUMIDITY": 46.603516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680248733.0",\n' +
    '            "TEMPERATURE": 20.440001,\n' +
    '            "AIRPRESSURE": 1002.218018,\n' +
    '            "HUMIDITY": 45.642578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680254768.0",\n' +
    '            "TEMPERATURE": 20.42,\n' +
    '            "AIRPRESSURE": 1002.237732,\n' +
    '            "HUMIDITY": 44.706055\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680260840.0",\n' +
    '            "TEMPERATURE": 20.41,\n' +
    '            "AIRPRESSURE": 1002.243103,\n' +
    '            "HUMIDITY": 44.396484\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680266871.0",\n' +
    '            "TEMPERATURE": 20.389999,\n' +
    '            "AIRPRESSURE": 1002.242432,\n' +
    '            "HUMIDITY": 44.748047\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680272907.0",\n' +
    '            "TEMPERATURE": 20.360001,\n' +
    '            "AIRPRESSURE": 1002.236389,\n' +
    '            "HUMIDITY": 43.901367\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680278944.0",\n' +
    '            "TEMPERATURE": 20.33,\n' +
    '            "AIRPRESSURE": 1002.239746,\n' +
    '            "HUMIDITY": 43.384766\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680284979.0",\n' +
    '            "TEMPERATURE": 20.33,\n' +
    '            "AIRPRESSURE": 1002.237549,\n' +
    '            "HUMIDITY": 44.103516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680291014.0",\n' +
    '            "TEMPERATURE": 20.34,\n' +
    '            "AIRPRESSURE": 1002.251892,\n' +
    '            "HUMIDITY": 47.079102\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680297046.0",\n' +
    '            "TEMPERATURE": 20.33,\n' +
    '            "AIRPRESSURE": 1002.263428,\n' +
    '            "HUMIDITY": 46.189453\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680303079.0",\n' +
    '            "TEMPERATURE": 20.32,\n' +
    '            "AIRPRESSURE": 1002.230164,\n' +
    '            "HUMIDITY": 46.017578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680309120.0",\n' +
    '            "TEMPERATURE": 20.280001,\n' +
    '            "AIRPRESSURE": 1002.179993,\n' +
    '            "HUMIDITY": 43.882812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680315161.0",\n' +
    '            "TEMPERATURE": 20.27,\n' +
    '            "AIRPRESSURE": 1002.218567,\n' +
    '            "HUMIDITY": 43.355469\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680321200.0",\n' +
    '            "TEMPERATURE": 20.26,\n' +
    '            "AIRPRESSURE": 1002.234924,\n' +
    '            "HUMIDITY": 43.697266\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680327241.0",\n' +
    '            "TEMPERATURE": 20.24,\n' +
    '            "AIRPRESSURE": 1002.191711,\n' +
    '            "HUMIDITY": 43.250977\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680333276.0",\n' +
    '            "TEMPERATURE": 20.24,\n' +
    '            "AIRPRESSURE": 1002.164551,\n' +
    '            "HUMIDITY": 43.181641\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680339313.0",\n' +
    '            "TEMPERATURE": 20.23,\n' +
    '            "AIRPRESSURE": 1002.179871,\n' +
    '            "HUMIDITY": 43.067383\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680345352.0",\n' +
    '            "TEMPERATURE": 20.23,\n' +
    '            "AIRPRESSURE": 1002.219299,\n' +
    '            "HUMIDITY": 43.021484\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680351394.0",\n' +
    '            "TEMPERATURE": 20.209999,\n' +
    '            "AIRPRESSURE": 1002.206726,\n' +
    '            "HUMIDITY": 42.540039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680357433.0",\n' +
    '            "TEMPERATURE": 20.209999,\n' +
    '            "AIRPRESSURE": 1002.19751,\n' +
    '            "HUMIDITY": 43.429688\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680363472.0",\n' +
    '            "TEMPERATURE": 20.219999,\n' +
    '            "AIRPRESSURE": 1002.240417,\n' +
    '            "HUMIDITY": 44.673828\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680369507.0",\n' +
    '            "TEMPERATURE": 20.219999,\n' +
    '            "AIRPRESSURE": 1002.236877,\n' +
    '            "HUMIDITY": 45.541016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680375544.0",\n' +
    '            "TEMPERATURE": 20.23,\n' +
    '            "AIRPRESSURE": 1002.213135,\n' +
    '            "HUMIDITY": 45.928711\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680381577.0",\n' +
    '            "TEMPERATURE": 20.23,\n' +
    '            "AIRPRESSURE": 1002.225403,\n' +
    '            "HUMIDITY": 46.123047\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680387614.0",\n' +
    '            "TEMPERATURE": 20.24,\n' +
    '            "AIRPRESSURE": 1002.213135,\n' +
    '            "HUMIDITY": 45.873047\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680393650.0",\n' +
    '            "TEMPERATURE": 20.24,\n' +
    '            "AIRPRESSURE": 1002.215332,\n' +
    '            "HUMIDITY": 45.610352\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680399684.0",\n' +
    '            "TEMPERATURE": 20.25,\n' +
    '            "AIRPRESSURE": 1002.186279,\n' +
    '            "HUMIDITY": 45.258789\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680405726.0",\n' +
    '            "TEMPERATURE": 20.26,\n' +
    '            "AIRPRESSURE": 1002.252808,\n' +
    '            "HUMIDITY": 45.829102\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680411762.0",\n' +
    '            "TEMPERATURE": 20.26,\n' +
    '            "AIRPRESSURE": 1002.197632,\n' +
    '            "HUMIDITY": 46.331055\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680417799.0",\n' +
    '            "TEMPERATURE": 20.280001,\n' +
    '            "AIRPRESSURE": 1002.222473,\n' +
    '            "HUMIDITY": 47.188477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680423839.0",\n' +
    '            "TEMPERATURE": 20.299999,\n' +
    '            "AIRPRESSURE": 1002.193054,\n' +
    '            "HUMIDITY": 47.929688\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680429876.0",\n' +
    '            "TEMPERATURE": 20.309999,\n' +
    '            "AIRPRESSURE": 1002.237671,\n' +
    '            "HUMIDITY": 48.125\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680435911.0",\n' +
    '            "TEMPERATURE": 20.32,\n' +
    '            "AIRPRESSURE": 1002.237549,\n' +
    '            "HUMIDITY": 48.250977\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680441949.0",\n' +
    '            "TEMPERATURE": 20.33,\n' +
    '            "AIRPRESSURE": 1002.21875,\n' +
    '            "HUMIDITY": 48.514648\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680447984.0",\n' +
    '            "TEMPERATURE": 20.34,\n' +
    '            "AIRPRESSURE": 1002.228699,\n' +
    '            "HUMIDITY": 48.640625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680454018.0",\n' +
    '            "TEMPERATURE": 20.34,\n' +
    '            "AIRPRESSURE": 1002.198425,\n' +
    '            "HUMIDITY": 48.549805\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680460058.0",\n' +
    '            "TEMPERATURE": 20.360001,\n' +
    '            "AIRPRESSURE": 1002.216736,\n' +
    '            "HUMIDITY": 48.654297\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680466103.0",\n' +
    '            "TEMPERATURE": 20.360001,\n' +
    '            "AIRPRESSURE": 1002.212341,\n' +
    '            "HUMIDITY": 48.677734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680472142.0",\n' +
    '            "TEMPERATURE": 20.370001,\n' +
    '            "AIRPRESSURE": 1002.205811,\n' +
    '            "HUMIDITY": 48.929688\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680478179.0",\n' +
    '            "TEMPERATURE": 20.379999,\n' +
    '            "AIRPRESSURE": 1002.196899,\n' +
    '            "HUMIDITY": 49.168945\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680484220.0",\n' +
    '            "TEMPERATURE": 20.370001,\n' +
    '            "AIRPRESSURE": 1002.203979,\n' +
    '            "HUMIDITY": 49.249023\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680490258.0",\n' +
    '            "TEMPERATURE": 20.370001,\n' +
    '            "AIRPRESSURE": 1002.226807,\n' +
    '            "HUMIDITY": 48.975586\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680496295.0",\n' +
    '            "TEMPERATURE": 20.379999,\n' +
    '            "AIRPRESSURE": 1002.209534,\n' +
    '            "HUMIDITY": 48.713867\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680502331.0",\n' +
    '            "TEMPERATURE": 20.389999,\n' +
    '            "AIRPRESSURE": 1002.203918,\n' +
    '            "HUMIDITY": 48.463867\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602680508365.0",\n' +
    '            "TEMPERATURE": 20.4,\n' +
    '            "AIRPRESSURE": 1002.216431,\n' +
    '            "HUMIDITY": 48.511719\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683651638.0",\n' +
    '            "TEMPERATURE": 20.379999,\n' +
    '            "AIRPRESSURE": 1002.107971,\n' +
    '            "HUMIDITY": 51.21875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683657681.0",\n' +
    '            "TEMPERATURE": 20.41,\n' +
    '            "AIRPRESSURE": 1002.120911,\n' +
    '            "HUMIDITY": 50.766602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683663723.0",\n' +
    '            "TEMPERATURE": 20.43,\n' +
    '            "AIRPRESSURE": 1002.120789,\n' +
    '            "HUMIDITY": 50.484375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683669759.0",\n' +
    '            "TEMPERATURE": 20.440001,\n' +
    '            "AIRPRESSURE": 1002.148682,\n' +
    '            "HUMIDITY": 50.349609\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683675794.0",\n' +
    '            "TEMPERATURE": 20.450001,\n' +
    '            "AIRPRESSURE": 1002.11322,\n' +
    '            "HUMIDITY": 50.293945\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683681832.0",\n' +
    '            "TEMPERATURE": 20.459999,\n' +
    '            "AIRPRESSURE": 1002.102661,\n' +
    '            "HUMIDITY": 50.249023\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683687865.0",\n' +
    '            "TEMPERATURE": 20.469999,\n' +
    '            "AIRPRESSURE": 1002.102966,\n' +
    '            "HUMIDITY": 50.227539\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683693909.0",\n' +
    '            "TEMPERATURE": 20.48,\n' +
    '            "AIRPRESSURE": 1002.131042,\n' +
    '            "HUMIDITY": 50.331055\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683699946.0",\n' +
    '            "TEMPERATURE": 20.49,\n' +
    '            "AIRPRESSURE": 1002.078308,\n' +
    '            "HUMIDITY": 50.251953\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683740567.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.076904,\n' +
    '            "HUMIDITY": 50.210938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683746611.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.10437,\n' +
    '            "HUMIDITY": 50.186523\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683752660.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.086121,\n' +
    '            "HUMIDITY": 50.1875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683758700.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.100952,\n' +
    '            "HUMIDITY": 50.211914\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683764741.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.04834,\n' +
    '            "HUMIDITY": 50.211914\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683770784.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.070923,\n' +
    '            "HUMIDITY": 50.234375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683777311.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.103333,\n' +
    '            "HUMIDITY": 50.37207\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683783355.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.086182,\n' +
    '            "HUMIDITY": 50.625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683789398.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.083923,\n' +
    '            "HUMIDITY": 50.167969\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683795445.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.083618,\n' +
    '            "HUMIDITY": 49.90625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683801482.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.094055,\n' +
    '            "HUMIDITY": 49.917969\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683841923.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.070923,\n' +
    '            "HUMIDITY": 49.848633\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683847968.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.074402,\n' +
    '            "HUMIDITY": 49.860352\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683854012.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.116394,\n' +
    '            "HUMIDITY": 49.928711\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683860068.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.101013,\n' +
    '            "HUMIDITY": 50.022461\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683866114.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.091431,\n' +
    '            "HUMIDITY": 49.975586\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683872156.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.093567,\n' +
    '            "HUMIDITY": 49.987305\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683878194.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.098877,\n' +
    '            "HUMIDITY": 49.918945\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683884240.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.102356,\n' +
    '            "HUMIDITY": 49.850586\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683890304.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.098877,\n' +
    '            "HUMIDITY": 49.838867\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683896344.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.102356,\n' +
    '            "HUMIDITY": 49.782227\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683902378.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.094055,\n' +
    '            "HUMIDITY": 49.78125\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683908420.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.109375,\n' +
    '            "HUMIDITY": 49.758789\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683914458.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.120789,\n' +
    '            "HUMIDITY": 49.860352\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683920497.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.157471,\n' +
    '            "HUMIDITY": 49.849609\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683926536.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.071228,\n' +
    '            "HUMIDITY": 49.803711\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683932574.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.122009,\n' +
    '            "HUMIDITY": 49.883789\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683939014.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.111267,\n' +
    '            "HUMIDITY": 49.756836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683945056.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.117371,\n' +
    '            "HUMIDITY": 49.917969\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683951103.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.104248,\n' +
    '            "HUMIDITY": 49.768555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683957138.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.117798,\n' +
    '            "HUMIDITY": 49.848633\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683963180.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.090637,\n' +
    '            "HUMIDITY": 49.710938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683969220.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.091553,\n' +
    '            "HUMIDITY": 49.836914\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683975257.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.106384,\n' +
    '            "HUMIDITY": 49.801758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683981295.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.106384,\n' +
    '            "HUMIDITY": 49.952148\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683987337.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.112183,\n' +
    '            "HUMIDITY": 49.916992\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683993371.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.117798,\n' +
    '            "HUMIDITY": 50.019531\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602683999413.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.091553,\n' +
    '            "HUMIDITY": 49.881836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684005449.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.112549,\n' +
    '            "HUMIDITY": 49.768555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684011484.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.086304,\n' +
    '            "HUMIDITY": 49.734375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684017528.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.108643,\n' +
    '            "HUMIDITY": 49.756836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684023567.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.094604,\n' +
    '            "HUMIDITY": 49.814453\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684029604.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.081116,\n' +
    '            "HUMIDITY": 49.780273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684035639.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.096436,\n' +
    '            "HUMIDITY": 49.94043\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684041674.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.094604,\n' +
    '            "HUMIDITY": 49.883789\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684047709.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.115601,\n' +
    '            "HUMIDITY": 49.746094\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684053744.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.117371,\n' +
    '            "HUMIDITY": 49.734375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684059779.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.100342,\n' +
    '            "HUMIDITY": 49.699219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684065816.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.118286,\n' +
    '            "HUMIDITY": 49.791016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684071852.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.097168,\n' +
    '            "HUMIDITY": 50.007812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684077885.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.096436,\n' +
    '            "HUMIDITY": 49.814453\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684083924.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.142334,\n' +
    '            "HUMIDITY": 49.755859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684089958.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.136719,\n' +
    '            "HUMIDITY": 49.733398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684095994.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.138916,\n' +
    '            "HUMIDITY": 49.767578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684102043.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.105652,\n' +
    '            "HUMIDITY": 49.835938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684108087.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.096863,\n' +
    '            "HUMIDITY": 49.858398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684114126.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.12439,\n' +
    '            "HUMIDITY": 49.699219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684120163.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.121948,\n' +
    '            "HUMIDITY": 49.673828\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684126200.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.104004,\n' +
    '            "HUMIDITY": 49.686523\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684132240.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.132019,\n' +
    '            "HUMIDITY": 49.698242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684138275.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.106201,\n' +
    '            "HUMIDITY": 49.719727\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684144312.0",\n' +
    '            "TEMPERATURE": 20.51,\n' +
    '            "AIRPRESSURE": 1002.115784,\n' +
    '            "HUMIDITY": 49.672852\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684150348.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.111877,\n' +
    '            "HUMIDITY": 49.914062\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684156384.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.127686,\n' +
    '            "HUMIDITY": 49.90332\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684162420.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.131104,\n' +
    '            "HUMIDITY": 49.754883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684168462.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.131592,\n' +
    '            "HUMIDITY": 49.777344\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684174505.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.146851,\n' +
    '            "HUMIDITY": 49.708984\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684180545.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.133728,\n' +
    '            "HUMIDITY": 49.754883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684186605.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.141113,\n' +
    '            "HUMIDITY": 49.870117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684192645.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.174561,\n' +
    '            "HUMIDITY": 49.779297\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684198704.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.133179,\n' +
    '            "HUMIDITY": 49.824219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684204750.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.156067,\n' +
    '            "HUMIDITY": 49.698242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684210786.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.189392,\n' +
    '            "HUMIDITY": 49.811523\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684216822.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.156067,\n' +
    '            "HUMIDITY": 49.845703\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684222862.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.15033,\n' +
    '            "HUMIDITY": 49.880859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684228899.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.1297,\n' +
    '            "HUMIDITY": 49.767578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684234936.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.091553,\n' +
    '            "HUMIDITY": 49.733398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684240972.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.111694,\n' +
    '            "HUMIDITY": 49.801758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684247009.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.091553,\n' +
    '            "HUMIDITY": 49.824219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684253045.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.071899,\n' +
    '            "HUMIDITY": 49.710938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684259081.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.11438,\n' +
    '            "HUMIDITY": 49.6875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684265119.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.153442,\n' +
    '            "HUMIDITY": 49.733398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684271159.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.119202,\n' +
    '            "HUMIDITY": 49.767578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684277197.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.153259,\n' +
    '            "HUMIDITY": 49.824219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684283230.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.132324,\n' +
    '            "HUMIDITY": 49.870117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684289283.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.120483,\n' +
    '            "HUMIDITY": 49.824219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684295338.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.135803,\n' +
    '            "HUMIDITY": 49.675781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684301374.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.131409,\n' +
    '            "HUMIDITY": 49.654297\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684307412.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.137085,\n' +
    '            "HUMIDITY": 49.734375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684313517.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.128357,\n' +
    '            "HUMIDITY": 49.756836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684319556.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.14624,\n' +
    '            "HUMIDITY": 49.675781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684325593.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.180908,\n' +
    '            "HUMIDITY": 49.688477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684331626.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.170837,\n' +
    '            "HUMIDITY": 49.722656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684337662.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.152405,\n' +
    '            "HUMIDITY": 49.677734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684343698.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.167358,\n' +
    '            "HUMIDITY": 49.675781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684349742.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.144531,\n' +
    '            "HUMIDITY": 49.65332\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684355780.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.166016,\n' +
    '            "HUMIDITY": 49.619141\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684361819.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.158142,\n' +
    '            "HUMIDITY": 49.516602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684367854.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.133179,\n' +
    '            "HUMIDITY": 49.516602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684373891.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.13092,\n' +
    '            "HUMIDITY": 49.608398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684379933.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.186157,\n' +
    '            "HUMIDITY": 49.5625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684385975.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.162476,\n' +
    '            "HUMIDITY": 49.619141\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684392019.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.173889,\n' +
    '            "HUMIDITY": 49.540039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684398061.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.145935,\n' +
    '            "HUMIDITY": 49.550781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684404096.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.184509,\n' +
    '            "HUMIDITY": 49.538086\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684410134.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.175232,\n' +
    '            "HUMIDITY": 49.630859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684416174.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.158752,\n' +
    '            "HUMIDITY": 49.619141\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684422210.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.156067,\n' +
    '            "HUMIDITY": 49.629883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684428249.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.158264,\n' +
    '            "HUMIDITY": 49.560547\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684434287.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.184509,\n' +
    '            "HUMIDITY": 49.493164\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684440330.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.169678,\n' +
    '            "HUMIDITY": 49.641602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684446368.0",\n' +
    '            "TEMPERATURE": 20.51,\n' +
    '            "AIRPRESSURE": 1002.160156,\n' +
    '            "HUMIDITY": 49.525391\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684452401.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.167053,\n' +
    '            "HUMIDITY": 49.583008\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684458436.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.187683,\n' +
    '            "HUMIDITY": 49.572266\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684464482.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.153442,\n' +
    '            "HUMIDITY": 49.458008\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684470518.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.168762,\n' +
    '            "HUMIDITY": 49.548828\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684476560.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.144287,\n' +
    '            "HUMIDITY": 49.526367\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684482601.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.171692,\n' +
    '            "HUMIDITY": 49.573242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684488639.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.149536,\n' +
    '            "HUMIDITY": 49.561523\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684494686.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.185913,\n' +
    '            "HUMIDITY": 49.606445\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684500725.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.170959,\n' +
    '            "HUMIDITY": 49.584961\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684506770.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.15741,\n' +
    '            "HUMIDITY": 49.538086\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684512820.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.165283,\n' +
    '            "HUMIDITY": 49.629883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684518860.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.163574,\n' +
    '            "HUMIDITY": 49.595703\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684524901.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.173035,\n' +
    '            "HUMIDITY": 49.824219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684530942.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.164673,\n' +
    '            "HUMIDITY": 49.710938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684536975.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.164673,\n' +
    '            "HUMIDITY": 49.677734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684543013.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.164673,\n' +
    '            "HUMIDITY": 49.746094\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684549047.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.125793,\n' +
    '            "HUMIDITY": 49.767578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684555085.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.175171,\n' +
    '            "HUMIDITY": 49.803711\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684561122.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.178101,\n' +
    '            "HUMIDITY": 49.769531\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684567159.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.173889,\n' +
    '            "HUMIDITY": 49.677734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684573200.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.170471,\n' +
    '            "HUMIDITY": 49.768555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684579235.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.181702,\n' +
    '            "HUMIDITY": 49.826172\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684585267.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.166504,\n' +
    '            "HUMIDITY": 49.757812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684594344.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.186646,\n' +
    '            "HUMIDITY": 49.791016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684600380.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.162048,\n' +
    '            "HUMIDITY": 49.825195\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684606417.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.174744,\n' +
    '            "HUMIDITY": 49.860352\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684615217.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.182983,\n' +
    '            "HUMIDITY": 49.918945\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684621249.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.180786,\n' +
    '            "HUMIDITY": 49.816406\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684627283.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.164124,\n' +
    '            "HUMIDITY": 49.81543\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684633319.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.135254,\n' +
    '            "HUMIDITY": 49.782227\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684639356.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.130798,\n' +
    '            "HUMIDITY": 49.917969\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684645393.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.132629,\n' +
    '            "HUMIDITY": 49.803711\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684651431.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.177246,\n' +
    '            "HUMIDITY": 49.816406\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684657472.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.164978,\n' +
    '            "HUMIDITY": 49.861328\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684663509.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.142212,\n' +
    '            "HUMIDITY": 49.770508\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684669542.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.170715,\n' +
    '            "HUMIDITY": 49.941406\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684675581.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.155396,\n' +
    '            "HUMIDITY": 49.803711\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684681625.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.185181,\n' +
    '            "HUMIDITY": 49.828125\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684687660.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.154907,\n' +
    '            "HUMIDITY": 49.792969\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684693701.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.154358,\n' +
    '            "HUMIDITY": 49.896484\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684699741.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.136108,\n' +
    '            "HUMIDITY": 49.862305\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684705777.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.141541,\n' +
    '            "HUMIDITY": 49.829102\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684711813.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.139038,\n' +
    '            "HUMIDITY": 49.874023\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684717848.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.147217,\n' +
    '            "HUMIDITY": 49.852539\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684723881.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.148926,\n' +
    '            "HUMIDITY": 49.886719\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684729919.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.120911,\n' +
    '            "HUMIDITY": 49.852539\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684735955.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.134033,\n' +
    '            "HUMIDITY": 49.829102\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684741992.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.157654,\n' +
    '            "HUMIDITY": 49.853516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684748026.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.132263,\n' +
    '            "HUMIDITY": 49.955078\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684754076.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.162476,\n' +
    '            "HUMIDITY": 49.931641\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684760118.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.123962,\n' +
    '            "HUMIDITY": 49.829102\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684766170.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.129211,\n' +
    '            "HUMIDITY": 49.852539\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684772205.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.115601,\n' +
    '            "HUMIDITY": 49.853516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684778243.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.162048,\n' +
    '            "HUMIDITY": 49.830078\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684784283.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.140991,\n' +
    '            "HUMIDITY": 49.853516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684790327.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.143188,\n' +
    '            "HUMIDITY": 49.854492\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684796367.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.152039,\n' +
    '            "HUMIDITY": 49.888672\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684802407.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.152039,\n' +
    '            "HUMIDITY": 49.899414\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684808441.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.15033,\n' +
    '            "HUMIDITY": 49.818359\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684814482.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.140137,\n' +
    '            "HUMIDITY": 49.966797\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684820524.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.145447,\n' +
    '            "HUMIDITY": 49.887695\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684826557.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.141846,\n' +
    '            "HUMIDITY": 49.853516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684832592.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.125732,\n' +
    '            "HUMIDITY": 49.920898\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684838627.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.134827,\n' +
    '            "HUMIDITY": 49.944336\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684844664.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.142334,\n' +
    '            "HUMIDITY": 49.944336\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684850703.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.103821,\n' +
    '            "HUMIDITY": 49.921875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684856741.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.139709,\n' +
    '            "HUMIDITY": 49.957031\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684862777.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.119141,\n' +
    '            "HUMIDITY": 49.864258\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684868817.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.190002,\n' +
    '            "HUMIDITY": 49.866211\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684874857.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.13623,\n' +
    '            "HUMIDITY": 49.888672\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684880889.0",\n' +
    '            "TEMPERATURE": 20.6,\n' +
    '            "AIRPRESSURE": 1002.153748,\n' +
    '            "HUMIDITY": 49.911133\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684886930.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.137512,\n' +
    '            "HUMIDITY": 49.853516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684892969.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.173889,\n' +
    '            "HUMIDITY": 49.841797\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684899008.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.175598,\n' +
    '            "HUMIDITY": 49.853516\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684905043.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.174744,\n' +
    '            "HUMIDITY": 49.920898\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684911084.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.197083,\n' +
    '            "HUMIDITY": 49.966797\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684917125.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.176941,\n' +
    '            "HUMIDITY": 49.898438\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684923164.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.178284,\n' +
    '            "HUMIDITY": 49.943359\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684929207.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.199402,\n' +
    '            "HUMIDITY": 49.931641\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684935245.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.177368,\n' +
    '            "HUMIDITY": 49.966797\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684941281.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.137085,\n' +
    '            "HUMIDITY": 49.897461\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684947318.0",\n' +
    '            "TEMPERATURE": 20.59,\n' +
    '            "AIRPRESSURE": 1002.18219,\n' +
    '            "HUMIDITY": 49.864258\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684953358.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.155457,\n' +
    '            "HUMIDITY": 49.875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684959414.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.125732,\n' +
    '            "HUMIDITY": 49.897461\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684965455.0",\n' +
    '            "TEMPERATURE": 20.58,\n' +
    '            "AIRPRESSURE": 1002.153748,\n' +
    '            "HUMIDITY": 49.943359\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684971493.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.152588,\n' +
    '            "HUMIDITY": 49.919922\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684977536.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.134766,\n' +
    '            "HUMIDITY": 49.894531\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684983570.0",\n' +
    '            "TEMPERATURE": 20.57,\n' +
    '            "AIRPRESSURE": 1002.155334,\n' +
    '            "HUMIDITY": 49.964844\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684989611.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.137329,\n' +
    '            "HUMIDITY": 49.963867\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602684995650.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.151428,\n' +
    '            "HUMIDITY": 49.929688\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685001688.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.146179,\n' +
    '            "HUMIDITY": 49.94043\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685007726.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.148376,\n' +
    '            "HUMIDITY": 49.952148\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685013764.0",\n' +
    '            "TEMPERATURE": 20.559999,\n' +
    '            "AIRPRESSURE": 1002.167664,\n' +
    '            "HUMIDITY": 49.99707\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685019801.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.145447,\n' +
    '            "HUMIDITY": 49.99707\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685025840.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.152039,\n' +
    '            "HUMIDITY": 49.974609\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685031880.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.154907,\n' +
    '            "HUMIDITY": 50.020508\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685037930.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.128357,\n' +
    '            "HUMIDITY": 50.007812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685043986.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.160339,\n' +
    '            "HUMIDITY": 49.996094\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685050062.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.177795,\n' +
    '            "HUMIDITY": 49.996094\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685056106.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.137573,\n' +
    '            "HUMIDITY": 50.052734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685062141.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.15033,\n' +
    '            "HUMIDITY": 50.041016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685068174.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.165161,\n' +
    '            "HUMIDITY": 49.983398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685074210.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.202515,\n' +
    '            "HUMIDITY": 50.085938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685080248.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.194092,\n' +
    '            "HUMIDITY": 50.041016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685086286.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.167358,\n' +
    '            "HUMIDITY": 50.075195\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685092327.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.148499,\n' +
    '            "HUMIDITY": 50.063477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685098367.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.178284,\n' +
    '            "HUMIDITY": 50.041016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685104403.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.155457,\n' +
    '            "HUMIDITY": 50.085938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685110440.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.169983,\n' +
    '            "HUMIDITY": 50.019531\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685116480.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.219055,\n' +
    '            "HUMIDITY": 50.007812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685122516.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.169556,\n' +
    '            "HUMIDITY": 50.017578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685128554.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.17218,\n' +
    '            "HUMIDITY": 49.995117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685134587.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.199402,\n' +
    '            "HUMIDITY": 50.054688\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685140631.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.192749,\n' +
    '            "HUMIDITY": 49.996094\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685146667.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.146484,\n' +
    '            "HUMIDITY": 49.983398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685152704.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.151733,\n' +
    '            "HUMIDITY": 50.143555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685158749.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.211121,\n' +
    '            "HUMIDITY": 50.143555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685164788.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.150024,\n' +
    '            "HUMIDITY": 50.097656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685170826.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.189697,\n' +
    '            "HUMIDITY": 50.085938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685176868.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.152588,\n' +
    '            "HUMIDITY": 50.040039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685182909.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.174072,\n' +
    '            "HUMIDITY": 50.142578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685188947.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.196411,\n' +
    '            "HUMIDITY": 50.09668\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685194983.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.143433,\n' +
    '            "HUMIDITY": 50.119141\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685201019.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.196899,\n' +
    '            "HUMIDITY": 50.073242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685207059.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.221863,\n' +
    '            "HUMIDITY": 50.129883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685213095.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.231018,\n' +
    '            "HUMIDITY": 50.108398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685219134.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.190674,\n' +
    '            "HUMIDITY": 50.108398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685225177.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.188538,\n' +
    '            "HUMIDITY": 50.095703\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685231212.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.143921,\n' +
    '            "HUMIDITY": 50.176758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685237248.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.142517,\n' +
    '            "HUMIDITY": 50.061523\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685243286.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.167969,\n' +
    '            "HUMIDITY": 50.09668\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685249325.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.18811,\n' +
    '            "HUMIDITY": 50.199219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685255368.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.154785,\n' +
    '            "HUMIDITY": 50.279297\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685261414.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.156555,\n' +
    '            "HUMIDITY": 50.1875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685267450.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.151245,\n' +
    '            "HUMIDITY": 50.050781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685273482.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.132019,\n' +
    '            "HUMIDITY": 50.0625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685279518.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.175781,\n' +
    '            "HUMIDITY": 50.02832\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685285555.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.145996,\n' +
    '            "HUMIDITY": 50.0625\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685291596.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.120605,\n' +
    '            "HUMIDITY": 50.09668\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685297633.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.154358,\n' +
    '            "HUMIDITY": 50.084961\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685303671.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.157837,\n' +
    '            "HUMIDITY": 50.09668\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685309717.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.110962,\n' +
    '            "HUMIDITY": 50.107422\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685315758.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.133728,\n' +
    '            "HUMIDITY": 50.129883\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685321793.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.14032,\n' +
    '            "HUMIDITY": 50.165039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685327836.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.142944,\n' +
    '            "HUMIDITY": 50.209961\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685333877.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.159241,\n' +
    '            "HUMIDITY": 50.142578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685339914.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.180603,\n' +
    '            "HUMIDITY": 50.130859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685345958.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.190308,\n' +
    '            "HUMIDITY": 50.188477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685352000.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.168762,\n' +
    '            "HUMIDITY": 50.119141\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685358040.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.174927,\n' +
    '            "HUMIDITY": 50.074219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685364075.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.207336,\n' +
    '            "HUMIDITY": 50.142578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685370113.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.187683,\n' +
    '            "HUMIDITY": 50.108398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685376153.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.188904,\n' +
    '            "HUMIDITY": 50.108398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685382191.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.138123,\n' +
    '            "HUMIDITY": 50.142578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685388229.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.161377,\n' +
    '            "HUMIDITY": 50.233398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685394269.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.115784,\n' +
    '            "HUMIDITY": 50.233398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685400308.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.157043,\n' +
    '            "HUMIDITY": 50.152344\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685406347.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.121582,\n' +
    '            "HUMIDITY": 50.118164\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685412386.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.173584,\n' +
    '            "HUMIDITY": 50.142578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685418424.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.156555,\n' +
    '            "HUMIDITY": 50.15332\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685424457.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.157043,\n' +
    '            "HUMIDITY": 50.198242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685430493.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.152161,\n' +
    '            "HUMIDITY": 50.176758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685436533.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.158752,\n' +
    '            "HUMIDITY": 50.164062\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685442569.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.157043,\n' +
    '            "HUMIDITY": 50.200195\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685448608.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.172791,\n' +
    '            "HUMIDITY": 50.222656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685454656.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.180603,\n' +
    '            "HUMIDITY": 50.176758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685460693.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.156555,\n' +
    '            "HUMIDITY": 50.176758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685466732.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.210876,\n' +
    '            "HUMIDITY": 50.142578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685472774.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.173462,\n' +
    '            "HUMIDITY": 50.143555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685478812.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.168335,\n' +
    '            "HUMIDITY": 50.130859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685484847.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.164062,\n' +
    '            "HUMIDITY": 50.141602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685490885.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.179382,\n' +
    '            "HUMIDITY": 50.15332\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685496921.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.198608,\n' +
    '            "HUMIDITY": 50.233398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685502964.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.147827,\n' +
    '            "HUMIDITY": 50.175781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685509007.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.142944,\n' +
    '            "HUMIDITY": 50.175781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685515044.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.135925,\n' +
    '            "HUMIDITY": 50.198242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685521085.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.165283,\n' +
    '            "HUMIDITY": 50.22168\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685527116.0",\n' +
    '            "TEMPERATURE": 20.51,\n' +
    '            "AIRPRESSURE": 1002.094788,\n' +
    '            "HUMIDITY": 50.185547\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685533158.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.154846,\n' +
    '            "HUMIDITY": 50.118164\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685539193.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.138611,\n' +
    '            "HUMIDITY": 50.176758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685545224.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.164856,\n' +
    '            "HUMIDITY": 50.1875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685551263.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.16748,\n' +
    '            "HUMIDITY": 50.222656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685557314.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.121094,\n' +
    '            "HUMIDITY": 50.222656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685563357.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.132507,\n' +
    '            "HUMIDITY": 50.141602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685569396.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.196899,\n' +
    '            "HUMIDITY": 50.175781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685575441.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.18811,\n' +
    '            "HUMIDITY": 50.175781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685581488.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.18811,\n' +
    '            "HUMIDITY": 50.199219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685587529.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.175781,\n' +
    '            "HUMIDITY": 50.245117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685593566.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.199951,\n' +
    '            "HUMIDITY": 50.267578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685599602.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.185913,\n' +
    '            "HUMIDITY": 50.165039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685605642.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.170654,\n' +
    '            "HUMIDITY": 50.1875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685611691.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.214844,\n' +
    '            "HUMIDITY": 50.188477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685617727.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.210022,\n' +
    '            "HUMIDITY": 50.165039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685623767.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.216553,\n' +
    '            "HUMIDITY": 50.198242\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685629813.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.197632,\n' +
    '            "HUMIDITY": 50.210938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685635851.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.223145,\n' +
    '            "HUMIDITY": 50.245117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685641900.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.177979,\n' +
    '            "HUMIDITY": 50.256836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685647941.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.20343,\n' +
    '            "HUMIDITY": 50.1875\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685653979.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.18634,\n' +
    '            "HUMIDITY": 50.22168\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685660022.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.185913,\n' +
    '            "HUMIDITY": 50.22168\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685666058.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.191101,\n' +
    '            "HUMIDITY": 50.255859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685672097.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.208679,\n' +
    '            "HUMIDITY": 50.255859\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685678135.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.153076,\n' +
    '            "HUMIDITY": 50.290039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685684177.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.177185,\n' +
    '            "HUMIDITY": 50.301758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685690217.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.158264,\n' +
    '            "HUMIDITY": 50.279297\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685696257.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.179749,\n' +
    '            "HUMIDITY": 50.314453\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685702294.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.17627,\n' +
    '            "HUMIDITY": 50.266602\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685708335.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.174072,\n' +
    '            "HUMIDITY": 50.267578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685714381.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.192017,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685720423.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.15741,\n' +
    '            "HUMIDITY": 50.245117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685726466.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.174561,\n' +
    '            "HUMIDITY": 50.268555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685732501.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.153076,\n' +
    '            "HUMIDITY": 50.267578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685738546.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.178284,\n' +
    '            "HUMIDITY": 50.291016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685744584.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.169189,\n' +
    '            "HUMIDITY": 50.256836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685750619.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.159851,\n' +
    '            "HUMIDITY": 50.280273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685756655.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.148987,\n' +
    '            "HUMIDITY": 50.256836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685762694.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.155945,\n' +
    '            "HUMIDITY": 50.314453\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685768736.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.154236,\n' +
    '            "HUMIDITY": 50.280273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685774774.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.170959,\n' +
    '            "HUMIDITY": 50.256836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685780819.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.174377,\n' +
    '            "HUMIDITY": 50.280273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685786857.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.180908,\n' +
    '            "HUMIDITY": 50.327148\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685792895.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.178284,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685798929.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.168579,\n' +
    '            "HUMIDITY": 50.337891\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685804969.0",\n' +
    '            "TEMPERATURE": 20.549999,\n' +
    '            "AIRPRESSURE": 1002.193604,\n' +
    '            "HUMIDITY": 50.337891\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685811005.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.178284,\n' +
    '            "HUMIDITY": 50.291016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685817043.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.137939,\n' +
    '            "HUMIDITY": 50.268555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685823078.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.148926,\n' +
    '            "HUMIDITY": 50.257812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685829115.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.135376,\n' +
    '            "HUMIDITY": 50.268555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685835156.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.169189,\n' +
    '            "HUMIDITY": 50.256836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685841197.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.162109,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685847232.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.161743,\n' +
    '            "HUMIDITY": 50.280273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685853270.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.169983,\n' +
    '            "HUMIDITY": 50.234375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685859313.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.169983,\n' +
    '            "HUMIDITY": 50.246094\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685865351.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.143677,\n' +
    '            "HUMIDITY": 50.280273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685871390.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.197266,\n' +
    '            "HUMIDITY": 50.268555\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685877427.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.171692,\n' +
    '            "HUMIDITY": 50.256836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685883463.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.137268,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685889509.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.184998,\n' +
    '            "HUMIDITY": 50.280273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685895546.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.183289,\n' +
    '            "HUMIDITY": 50.382812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685901581.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.192993,\n' +
    '            "HUMIDITY": 50.290039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685907621.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.191895,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685913661.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.157837,\n' +
    '            "HUMIDITY": 50.267578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685919705.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.157715,\n' +
    '            "HUMIDITY": 50.359375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685925749.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.173462,\n' +
    '            "HUMIDITY": 50.291016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685931788.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.187988,\n' +
    '            "HUMIDITY": 50.336914\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685937829.0",\n' +
    '            "TEMPERATURE": 20.540001,\n' +
    '            "AIRPRESSURE": 1002.142822,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685943875.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.193176,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685949914.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.178772,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685955946.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.181091,\n' +
    '            "HUMIDITY": 50.267578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685961986.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.18396,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685968021.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.188904,\n' +
    '            "HUMIDITY": 50.313477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685974058.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.202515,\n' +
    '            "HUMIDITY": 50.291016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685980094.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.206116,\n' +
    '            "HUMIDITY": 50.302734\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685986133.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.178894,\n' +
    '            "HUMIDITY": 50.267578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685992173.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.164856,\n' +
    '            "HUMIDITY": 50.279297\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602685998212.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.164429,\n' +
    '            "HUMIDITY": 50.335938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686004254.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.164001,\n' +
    '            "HUMIDITY": 50.382812\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686010289.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.19812,\n' +
    '            "HUMIDITY": 50.370117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686016336.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.18634,\n' +
    '            "HUMIDITY": 50.3125\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686022370.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.175415,\n' +
    '            "HUMIDITY": 50.347656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686028404.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.173218,\n' +
    '            "HUMIDITY": 50.290039\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686034447.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.180603,\n' +
    '            "HUMIDITY": 50.301758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686040487.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.217041,\n' +
    '            "HUMIDITY": 50.335938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686046522.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.157043,\n' +
    '            "HUMIDITY": 50.3125\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686052556.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.160461,\n' +
    '            "HUMIDITY": 50.359375\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686058599.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.13031,\n' +
    '            "HUMIDITY": 50.347656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686064636.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.192993,\n' +
    '            "HUMIDITY": 50.313477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686070675.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.191589,\n' +
    '            "HUMIDITY": 50.289062\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686076713.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.19812,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686082752.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.184143,\n' +
    '            "HUMIDITY": 50.358398\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686088793.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.180603,\n' +
    '            "HUMIDITY": 50.347656\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686094828.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.197266,\n' +
    '            "HUMIDITY": 50.348633\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686100863.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.206116,\n' +
    '            "HUMIDITY": 50.405273\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686106903.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.185913,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686112945.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.175415,\n' +
    '            "HUMIDITY": 50.438477\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686118991.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.159607,\n' +
    '            "HUMIDITY": 50.392578\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686125032.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.174561,\n' +
    '            "HUMIDITY": 50.357422\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686131072.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.192993,\n' +
    '            "HUMIDITY": 50.381836\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686137106.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.170654,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686143142.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.181091,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686149193.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.186707,\n' +
    '            "HUMIDITY": 50.325195\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686155229.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.192017,\n' +
    '            "HUMIDITY": 50.27832\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686161269.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.203918,\n' +
    '            "HUMIDITY": 50.300781\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686167313.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.183289,\n' +
    '            "HUMIDITY": 50.3125\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686173352.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.210022,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686179396.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.204712,\n' +
    '            "HUMIDITY": 50.370117\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686185432.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.208679,\n' +
    '            "HUMIDITY": 50.416016\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686191472.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.191589,\n' +
    '            "HUMIDITY": 50.335938\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686197510.0",\n' +
    '            "TEMPERATURE": 20.52,\n' +
    '            "AIRPRESSURE": 1002.199951,\n' +
    '            "HUMIDITY": 50.324219\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686203551.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.214355,\n' +
    '            "HUMIDITY": 50.301758\n' +
    '        },\n' +
    '        {\n' +
    '            "SENSOR_ID": 0,\n' +
    '            "TIMESTAMP": "1602686209589.0",\n' +
    '            "TEMPERATURE": 20.530001,\n' +
    '            "AIRPRESSURE": 1002.235413,\n' +
    '            "HUMIDITY": 50.335938\n' +
    '        }\n' +
    '    ]\n' +
    '}');

module.exports = {
  'testSensorData': testSensorData,
};
