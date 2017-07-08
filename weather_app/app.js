
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

geocode.gecodeAddress(argv.address);

