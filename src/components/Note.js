import React from "react";
import { MdDeleteForever } from "react-icons/md";
function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note__footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => {
            console.log(id);
            handleDeleteNote(id)}
        }
          className="delete__icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
