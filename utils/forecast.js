const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/${latitude},${longitude}`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const data = body;
            callback(undefined, `${data.daily.data[0].summary} It is currently ${data.currently.temperature} degrees out.  There is a ${data.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast;