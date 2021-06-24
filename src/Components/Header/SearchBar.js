import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleInput = (newValue) => {
      setSearch(newValue)
  };

  const handleSubmit = () => {};

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit()
    }}>
      <input
      placeholder='Search'
        value={search}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      ></input>
      <button></button>
    </form>
  );
};

export default SearchBar;
