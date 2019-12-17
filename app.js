const request = require('request');

const url = 'https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/37.8267,-122.4233';

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if(response.body.error) {
    console.log('Unable to find location');
  } else {
    const data = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out.  There is a ${data.precipProbability}% chance of rain.`)
  }
});

//Geocoding
//Address -> Lat/Long -> Weather

const mapBoxAccessToken = 'access_token=pk.eyJ1IjoibmJidXp6eTEiLCJhIjoiY2s0N2p1dGZmMHZzOTNlbjZkN3cwMWNvNSJ9.52osqj_TwK54ghICZdat8Q';
const mapBoxForwardGeocodingEndpoint = '/geocoding/v5/mapbox.places/';
const mapBoxUrl = `https://api.mapbox.com${mapBoxForwardGeocodingEndpoint}Los%20Angeles.json?${mapBoxAccessToken}`;

request({ url: mapBoxUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log('latitude', latitude);
  console.log('longitude', longitude);
});
