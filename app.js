const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (geocodeError, { latitude, longitude, location }) => {
    if (geocodeError) {
      return console.log('Error', geocodeError);
    }
    else {
      forecast(latitude, longitude, (forecastError, forecastData) => {
        if (forecastError) {
          return console.log('Error:', forecastError);
        } else {
          console.log(location);
          console.log(forecastData);
        }
      })
    } 
  });
}

