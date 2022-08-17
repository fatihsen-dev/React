import { AiFillCloseSquare } from "react-icons/ai";
import React, { useContext } from "react";
import NotesContext from "../context/note-context";

function Note({ note, index }) {
  const { dispatch } = useContext(NotesContext);
  return (
    <tr className='bg-white'>
      <td className='bg-gray-500'>{index + 1}</td>
      <td className='bg-gray-500'>{note.title}</td>
      <td className='bg-gray-500'>{note.desc}</td>
      <td className='bg-gray-500'>
        <button
          onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
        >
          <AiFillCloseSquare className='text-[25px]' />
        </button>
      </td>
    </tr>
  );
}

export default Note;
