
const request = require("request");
require("");
let gecodeAddress = (address, callback) => {

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
            callback({
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng,
            });

        }

    });

}


module.exports = { gecodeAddress };