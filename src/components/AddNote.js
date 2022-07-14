import React, { useState } from "react";
import { MdMic } from "react-icons/md";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 500;
  const handleChange = (e) => {
    // console.log(e.target.value)
    if (charLimit - e.target.value.length >= 0) setNoteText(e.target.value);
  };
  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="So, how was your day?"
        onChange={handleChange}
      ></textarea>
      <div className="note__footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleClick}>
          SAVE
        </button>
      </div>
    </div>
  );
}

export default AddNote;
