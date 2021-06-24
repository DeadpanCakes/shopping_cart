import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleInput = (newValue) => {
    setSearch(newValue);
  };

  const handleSubmit = () => {};

  const formStyle = {
      margin: '0 10px'
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      style={formStyle}
    >
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      ></input>
      <button>
          <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
