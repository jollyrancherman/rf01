import React from "react";

const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        className="pa3 b--green bg-lightest-blue"
        type="searchbox"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBox;
