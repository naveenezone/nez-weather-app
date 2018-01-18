const request = require ('request');

const apiKey = '018d1430c7f1c497ceeca4eaddcc4f1b';


// var lat = 40.5712323;
// var lng= -74.2885976;
const dsurl = `https://api.darksky.net/forecast`;

var getWeather = (lat,lng,callback) => {

    request({
        url: `${dsurl}/${apiKey}/${lat},${lng}`,
        json:true
    },(error,response,body) => {
     if (!error && response.statusCode === 200 ){
        callback(undefined, {
            temperature:    body.currently.temperature,
            apparentTemperature:    body.currently.apparentTemperature
        });
     } else {
        callback('Unable to fetch weather');
     }
    
    });
    
};

module.exports.getWeather = getWeather;

