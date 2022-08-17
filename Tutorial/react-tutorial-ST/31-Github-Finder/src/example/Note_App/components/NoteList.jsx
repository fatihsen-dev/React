import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/note-context";

function NoteList() {
  const { notes } = useContext(NotesContext);
  return notes.map((note, index) => (
    <Note key={index} note={note} index={index} />
  ));
}

export default NoteList;
