console.log("Starting app");

setTimeout(() => {
    console.log("inside call back");
}, 3000);

setTimeout(() => {
    console.log("inside secoind call back");
}, 0);


console.log("Finishing app");