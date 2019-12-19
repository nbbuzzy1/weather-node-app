const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Dallas', (error, data) => {
  if (data) {
    forecast(data.latitude, data.longitude, (error, data) => {
      console.log('Error:', error);
      console.log('Data:', data);
    })
  } else {
    console.log('Error', error);
  }
});


// forecast(37.8267, -122.4233, (error, data) => {
//   console.log('Error:', error);
//   console.log('Data:', data);
// })