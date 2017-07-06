

console.log("starting app");
const fs = require('fs');
const os = require('os');
const notes = require('./note')
const _ = require("lodash");

/*let user = os.userInfo();
// console.log(user);
let userName = user.username;
fs.appendFile('greetings.txt', "Hello " + userName + " You are " + notes.age);

console.log("finish app");
*/

/*let res = notes.addNote();
console.log(res);

let result = notes.add(1, 2);

console.log(result);*/

console.log(_.isNumber("44"));