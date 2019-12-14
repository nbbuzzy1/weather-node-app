const request = require('request');

const url = 'https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/37.8267,-122.4233';

request({ url }, (error, response) => {
  // console.log('error', error);
  const data = JSON.parse(response.body);
  console.log(data.currently);
});