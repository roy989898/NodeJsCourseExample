console.log('Starting notes.js');

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  }
  let notesString = JSON.stringify(notes);

  try {
    notesString = fs.readFileSync("notes-data.json");
  } catch (error) {
    fs.writeFileSync("notes-data.json", "[]");
  }


  notes = JSON.parse(notesString);

  var duplicatedNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicatedNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }

};

var getAll = () => {
  console.log('Getting all notes');
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