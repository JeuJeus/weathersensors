const SERVER_URI = 'https://awe2-api.jeujeus.de';
const UPDATE_INTERVAL = 1000 * 60;// one minute
const LATEST_N_DATAPOINTS_AMOUNT = 10;

const TEMPERATURE_COLOR = 'rgb(204,0,112,0.7)';
const HUMIDITY_COLOR = 'rgb(0,39,191,0.6)';
const AIRPRESSURE_COLOR = 'rgb(0,204,109,0.8)';

const TRAFFIC_LIGHT_CLASSES = {
  'RED' : 'redTrafficLight',
  'YELLOW' : 'yellowTrafficLight',
  'GREEN' : 'greenTrafficLight',
};

module.exports = {
  SERVER_URI,
  UPDATE_INTERVAL,
  TEMPERATURE_COLOR,
  AIRPRESSURE_COLOR,
  HUMIDITY_COLOR,
  TRAFFIC_LIGHT_CLASSES,
  LATEST_N_DATAPOINTS_AMOUNT,
};
