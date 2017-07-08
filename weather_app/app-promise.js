
const argv = require('yargs').options({
    a: {
        demand: true,
        alias: "address",
        describe: "address to fetch data",
        string: true
    }
}).help()
    .alias('help', 'h').argv;



let gecode = require("./gecode/gecode");
let weather = require("./weather/weather");


gecode.gecodeAddress(argv.address).then((response) => {
    // console.log(response);
    let result = response.data.results[0];
    if (result == undefined) {
        throw new Error("Have error");
    }
    let lat = result.geometry.location.lat;
    let lng = result.geometry.location.lng;

    return weather.queryCurrentWeather(lat, lng);
}).then((weatherResponse) => {
    let weatherData = weatherResponse.data;

    console.log(JSON.stringify(weatherData, undefined, 3));

}).catch((error) => {
    console.log(error);
});


