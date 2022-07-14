import React, { useState } from "react";
import { MdMic, MdMicOff } from "react-icons/md";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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

  //voice note

  const handleVoice = () => {
    SpeechRecognition.startListening();
    setNoteText(transcript);
    console.log(transcript);
  };

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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
        <MdMic onClick={handleVoice} className="delete__icon" size="1.3em" />
        <MdMicOff
          onClick={SpeechRecognition.stopListening}
          className="delete__icon"
          size="1.3em"
        />
        <button className="save" onClick={handleClick}>
          SAVE
        </button>
      </div>
    </div>
  );
}

export default AddNote;
