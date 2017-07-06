

console.log("starting app");
const fs = require('fs');
const os = require('os');
const notes = require('./note')
const _ = require("lodash");
const yargs = require("yargs");


const argv = yargs.argv;

notes.addNote(argv.title, argv.body);

// console.log("port: ", argv.port);
