import React from "react";
import { MdSearch } from "react-icons/md";
function SearchBar({ handleSearchNote }) {
  return (
    <div className="searchbar">
      <MdSearch className="search__icon" size="1.3em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Search your day"
      />
    </div>
  );
}

export default SearchBar;
