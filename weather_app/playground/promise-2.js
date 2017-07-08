const request = require("request");
let gecodeAddress = (address) => {


    return new Promise((resolve, reject) => {
        const requestLink = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            encodeURIComponent(address);
        request({
            url: requestLink,
            json: true

        }, function (error, respponse, body) {
            if (error || body.results.length < 1) {
                // console.log('Error:', "Nothing can search");
                reject("Nothing can search");
            } else {
                /*  console.log('Address:', JSON.stringify(body.results[0].formatted_address));
                  console.log('Latitude:', JSON.stringify(body.results[0].geometry.location.lat));
                  console.log('Longitude:', JSON.stringify(body.results[0].geometry.location.lng));*/
                resolve({
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng,
                });

            }

        });

    });
};

gecodeAddress("0000 000").then((location) => {
    let jsonString = JSON.stringify(location, undefined, 2);
    console.log(jsonString);
}, (error) => {
    console.log(error)
});