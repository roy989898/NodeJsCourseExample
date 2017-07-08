let somePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // reject("unable to fulfill");
        resolve("hey,it work");
    }, 2000);


});


somePromise.then((message) => {
    console.log("success: ", message);

}, (errorMessage => {
    console.log("Error: ", errorMessage);
}));