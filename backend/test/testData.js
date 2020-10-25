const faker = require('faker');

function createTimeFilterTestData(length) {
  return Array.from({length: length}, (x, i) => {
    return {
      'SENSOR_ID': faker.random.number(),
      'TIMESTAMP': i,
      'TEMPERATURE': faker.random.float(),
      'AIRPRESSURE': faker.random.float(),
      'HUMIDITY': faker.random.float(),
    };
  });
}

module.exports = {
  'createTimeFilterTestData': createTimeFilterTestData,
};
