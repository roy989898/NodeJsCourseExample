

console.log("starting app");
const fs = require('fs');
const os = require('os');

let user = os.userInfo();
console.log(user);
let userName = user.username;
fs.appendFile('greetings.txt', "Hello " + userName);

console.log("finish app");
