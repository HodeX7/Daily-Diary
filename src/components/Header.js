import React from "react";

function Header({ handleDarkMode, mode }) {
  return (
    <div className="header">
      <h1>DAILY DIARY</h1>
      <button
        onClick={() => handleDarkMode((prevMode) => !prevMode)}
        className="save"
      >
        {" "}
        Enter {mode ? "Light" : 'Dark'} Mode
      </button>
    </div>
  );
}

export default Header;
