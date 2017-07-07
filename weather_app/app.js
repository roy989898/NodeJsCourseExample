const request = require("request");
let address = "elegance garden";
address=address.replace(" ","%20");
const requestLink = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    address;
request({
    url: requestLink,
    json: true

}, function (error, respponse, body) {
    console.log('Address:', JSON.stringify(body.results[0].formatted_address));
    console.log('Latitude:', JSON.stringify(body.results[0].geometry.location.lat));
    console.log('Longitude:', JSON.stringify(body.results[0].geometry.location.lng));
});