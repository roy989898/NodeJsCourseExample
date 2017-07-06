

console.log("starting app");
const fs = require('fs');
const os = require('os');
const notes = require('./note')
const _ = require("lodash");
const yargs = require("yargs");


const argv = yargs.argv;
const command = argv._[0];

notes.addNote(argv.title, argv.body);

switch (command) {
    case "list":
        notes.getAll();
        break;
}

