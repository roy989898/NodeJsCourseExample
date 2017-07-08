const request = require("request");
let queryCurrentWeather = (lat, long, callback) => {
    let requestLink = "https://api.darksky.net/forecast/f2333815f5f8c240bcc9baf188f6540a/" + lat + "," + long
    "?units=auto"

    request({
        url: requestLink,
        json: true
    }, function (error, respponse, body) {
        if (error || respponse.statusCode != 200) {
            // console.log("Getting weather Error");
            callback("Getting weather Error", undefined);
        } else {
            // let bodyString = JSON.stringify(body, undefined, 2);
            // console.log(bodyString);
            callback(undefined, body);



        }
    });

};


module.exports = {
    queryCurrentWeather
};