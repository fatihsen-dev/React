import React, { useState, useContext } from "react";
import NotesContext from "../context/note-context";

function AddNoteForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { dispatch } = useContext(NotesContext);

  const AddNote = (e) => {
    e.preventDefault();

    if (title) {
      // setNotes([...notes, { title, desc }]);
      dispatch({ type: "ADD_NOTE", title, desc });
      setTitle("");
      setDesc("");

      e.target.inputText.value = "";
      e.target.areaText.value = "";
    }
  };
  return (
    <form
      onSubmit={AddNote}
      className='flex text-[18px] flex-col gap-1 font-medium text-neutral-900'
    >
      <input
        type='text'
        placeholder='Title'
        className='rounded-sm outline-none p-1'
        name='inputText'
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='rounded-sm p-1 resize-none outline-none'
        placeholder='Description'
        name='areaText'
        cols='60'
        rows='4'
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button
        className='rounded-sm text-base py-1 bg-white hover:bg-opacity-90 transition-colors'
        type='submit'
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;
