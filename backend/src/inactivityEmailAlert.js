const INACTIVITY_TIME_TRESHOLD_SECONDS = 20 * 60 * 1000;

function checkIfSensorInactive(timestamp) {
  const timeSecondsNow = Date.now();
  return (timeSecondsNow - timestamp) > INACTIVITY_TIME_TRESHOLD_SECONDS;
}

module.exports = {
  checkIfSensorInactive,
};
