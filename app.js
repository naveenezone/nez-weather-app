
// const request = require ('request');
const geocode = require ('./geocode/geocode');
const weather = require ('./weather/weather');
const yargs = require('yargs');
const argv = yargs
    .options({
        a:  {
            demand: true,
            alias:  'address',
            describe: 'Address to fetch weather for',
            stringaddr: true

        }
    })
    .help()
    .alias('help','h')
    .argv;


geocode.geocodeAddress(argv.address,(errorMessage,results) => {
    if (errorMessage){
        console.log(errorMessage);
     } else {
        // console.log(results);
        // console.log(JSON.stringify(results,undefined,2));

        weather.getWeather(results.latitude,results.longitude,(errorMessage,Weatherresults) => {
            if (errorMessage){
                console.log(errorMessage);
             } else {
                // console.log(results.address);
                // console.log(JSON.stringify(Weatherresults,undefined,2));
                console.log(`Address: ${results.address}
                Current Temperature: ${Weatherresults.temperature}
                Feels like : ${Weatherresults.apparentTemperature}` )
             }
        
        });


     }

});



