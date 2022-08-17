import React, { useState, useEffect, useReducer } from "react";
import "../../styles/index.css";
import notesReducer from "./Reducer/notes";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import NotesContext from "./context/note-context";

function NoteApp() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      // setNotes(notesData);
      dispatch({ type: "POPULATE_NOTES", notes: notesData });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = (title) => {
    // setNotes(notes.filter((note) => note.title !== title));
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <div className='bg-slate-900 pt-8 w-full h-full flex justify-center items-start'>
        <div className='flex flex-col gap-3 p-3 bg-blue-500 rounded-sm'>
          <h1 className='text-5xl font-medium bg-blue-500 border-2 rounded-sm py-4 text-center w-full'>
            Note App
          </h1>
          {notes && (
            <table className='flex rounded-sm flex-col text-[18px] gap-1 mt-3 bg-gray-100 p-1'>
              <thead>
                <tr className='bg-white'>
                  <th className='bg-gray-600'>ID</th>
                  <th className='bg-gray-600'>TITLE</th>
                  <th className='bg-gray-600'>DESCRIPTION</th>
                  <th className='bg-gray-600'></th>
                </tr>
              </thead>
              <tbody className='flex flex-col gap-[2px]'>
                <NoteList removeNote={removeNote} notes={notes} />
              </tbody>
            </table>
          )}
          <AddNoteForm />
        </div>
      </div>
    </NotesContext.Provider>
  );
}

export default NoteApp;
