import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { useHistory } from "react-router-dom";
import "./SearchInput.css";
import { useStateValue } from "../contextApi/StateProvider";
import { actionTypes } from "../contextApi/reducer";

function SearchInput({ term }) {
  const [input, setInput] = useState("");

  const [{}, dispatch] = useStateValue();

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    history.push("/search");

    dispatch({
      type: actionTypes.Set_Search_Term,
      term: input,
    });
  };

  return (
    <>
      {term ? (
        <form className="searchinput searchinput__term">
          <div className="searchinput__container search__term">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <MicIcon />
            <SearchIcon />
          </div>
          <button type="submit" className="buttonsHidden" onClick={search}>
            google search
          </button>
        </form>
      ) : (
        <form className="searchinput">
          <div className="searchinput__container">
            <SearchIcon />
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <MicIcon />
          </div>
          <div className="buttons">
            <button type="submit" onClick={search}>
              google search
            </button>
            <button>I'm feeling lucky</button>
          </div>
        </form>
      )}
    </>
  );
}

export default SearchInput;
