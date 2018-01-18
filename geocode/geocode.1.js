const request = require ('request');


var geocodeAddress = (address) => {

    // var encodedAddress = encodeURIComponent(argv.address);
    var encodedAddress = encodeURIComponent(address);

    // console.log(encodedAddress);
    
    request({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=500%20Holly%20St%20Toronto%20%20Ontario',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
    },(error,response,body)=> {
    // console.log(JSON.stringify(body,undefined,2));
    if (error) {
        // 
        console.log('Unable to connect to Google Servers.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Invalid Address');
    } else if (body.status === 'OK'){
        console.log(`    
        Address: ${body.results[0].formatted_address}
        Latitude: ${body.results[0].geometry.location.lat}
        Longitude: ${body.results[0].geometry.location.lng}
        `);    
    }
});
    
};




module.exports.geocodeAddress = geocodeAddress;