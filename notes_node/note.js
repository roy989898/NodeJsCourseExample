console.log('Starting notes.js');

const fs = require("fs");
var fetchNotes = () => {
  let notesString;
  try {
    notesString = fs.readFileSync("notes-data.json");
    let notes = JSON.parse(notesString);
    return notes;
  } catch (error) {
    return [];
  }




};

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};


var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }
  var duplicatedNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicatedNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
  }

};

var getAll = () => {
  return 
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};