/*var obj = {
    name: "Andrew"
};

var stringObg = JSON.stringify(obj);
console.log(typeof stringObg);
console.log(stringObg);*/

/*var personString='{"name":"Andrew","age":25}'
var person=JSON.parse(personString);
console.log(typeof person);*/

const fs = require('fs');
var originalNote = {
    title: "Some title",
    body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);