import React from "react";
import SearchInput from "./SearchInput";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <SearchInput />
      </div>
    </div>
  );
}

export default Search;
