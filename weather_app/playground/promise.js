
let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("Waning!!Arg must number");

            }

        }, 1500);
    });
};

asyncAdd(3, 5).then((result) => {
    console.log(result);
    return asyncAdd(result, 6)
}, (errorMessage) => {
    console.log(errorMessage);
}).then((result) => {
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
});

/*let somePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // reject("unable to fulfill");
        resolve("hey,it work");
    }, 2000);


});


somePromise.then((message) => {
    console.log("success: ", message);

}, (errorMessage => {
    console.log("Error: ", errorMessage);
}));*/