const request = require("request");
let address = "103";
const requestLink = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    address;
request({
    url: requestLink,
    json: true

}, function (error, respponse, body) {
    // console.log('error:', error); // Print the error if one occurred 
    // console.log('statusCode:', respponse && respponse.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google hom
});