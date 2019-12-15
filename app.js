const request = require('request');

const url = 'https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/37.8267,-122.4233';

request({ url, json: true }, (error, response) => {
  // console.log('error', error);
  const data = response.body.currently;
  console.log(`${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out.  There is a ${data.precipProbability}% chance of rain.`)
});