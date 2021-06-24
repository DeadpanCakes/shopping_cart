import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useSearch from '../../items/itemHooks/useSearch';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchItems = useSearch();

  const handleInput = (newValue) => {
    setSearch(newValue);
  };

  const handleSubmit = () => {
    console.log(searchItems(search))
  };

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
