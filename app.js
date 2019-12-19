const request = require('request');
const geocode = require('./utils/geocode');

const url = 'https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/37.8267,-122.4233';

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if(response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const data = response.body.currently;
//     console.log(`${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out.  There is a ${data.precipProbability}% chance of rain.`)
//   }
// });

//Geocoding
//Address -> Lat/Long -> Weather

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

