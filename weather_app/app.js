const request = require("request");
const argv = require('yargs').options({
    a: {
        demand: true,
        alias: "address",
        describe: "address to fetch data",
        string: true
    }
}).help()
    .alias('help', 'h').argv;

let address;
if (argv.address) {
    address = argv.address;
} else {
    address = "elegance garden";
}

const requestLink = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    encodeURIComponent(address);
request({
    url: requestLink,
    json: true

}, function (error, respponse, body) {
    if (error || body.results.length < 1) {
        console.log('Error:', "Nothing can search");
    } else {
        console.log('Address:', JSON.stringify(body.results[0].formatted_address));
        console.log('Latitude:', JSON.stringify(body.results[0].geometry.location.lat));
        console.log('Longitude:', JSON.stringify(body.results[0].geometry.location.lng));
    }

});