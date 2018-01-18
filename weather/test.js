const request = require ('request');

const apiKey = '018d1430c7f1c497ceeca4eaddcc4f1b';

//Correct code
var lat = 40.2884395;
var lng= -75.2090623;

//InCorrect code
// var lat = 1640.3232;
// var lng= -75.2090623;
const dsurl = `https://api.darksky.net/forecast`;

// request();
// request({object},(arg) => {callback function});

// Normal request

// request({
//     url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
//     json:true
// },(error,response,body) => {
// console.log(JSON.stringify(body.currently.temperature,undefined,2));
// });

//  request with error handling
request({
    // url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    url: `${dsurl}/${apiKey}/${lat},${lng}`,
    json:true
},(error,response,body) => {
// console.log(JSON.stringify(body.currently.temperature,undefined,2));

// if (error) {
//  console.log('Unable to connect to forecast.io servers');
// } else if (response.statusCode === 400) {
//     console.log('Unable to connect to forecast.io servers');
// } else if (response.statusCode === 404) {
//     console.log('Unable to connect, Invalid inputs');
// } else if (response.statusCode === 200) {
//     console.log(JSON.stringify(body.currently.temperature,undefined,2));
// }

 if (!error && response.statusCode === 200 ){
    console.log(JSON.stringify(body.currently.temperature,undefined,2));
 } else {
 console.log('Unable to fetch weather');
 }

});

