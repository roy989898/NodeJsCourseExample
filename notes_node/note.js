console.log("Starting note.js");
// console.log(module);
var addNote = (title, body) => {
    console.log("Adding note", title, body);
};

var getAll = () => {
    console.log("Getting all notes");
};

module.exports = {
    addNote: addNote,
    getAll: getAll
};