
const argv = require('yargs').options({
    a: {
        demand: true,
        alias: "address",
        describe: "address to fetch data",
        string: true
    }
}).help()
    .alias('help', 'h').argv;



const geocode = require("./gecode/gecode");
const weather = require("./weather/weather");

geocode.gecodeAddress(argv.address, function (locationResult) {
    let lat = locationResult.lat;
    let lng = locationResult.lng;
    weather.queryCurrentWeather(lat, lng);

});

