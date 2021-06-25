import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchPreview from "./SearchPreview";
import useSearch from "../../items/itemHooks/useSearch";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [resultsPreviewShown, setPreviewShown] = useState(false)

  const history = useHistory();
  const searchItems = useSearch();

  const handleInput = (newValue) => {
    setSearch(newValue);
  };

  const handleSubmit = () => {
    history.push(`/shop/search?=${search}`)
    console.log(searchItems(search));
  };

  const formStyle = {
    position: 'relative',
    margin: "0 10px",
  };

  const previewStyle = {
    position: "absolute",
    maxHeight: resultsPreviewShown ? '300px' : 0,
    transition: "max-height 500ms ease-in-out",
    overflow: 'hidden',
    right: '0%',
    width: 300
  };

  useEffect(() => {
    if (search.length > 0) {
      setPreviewShown(true)
    } else {
      setPreviewShown(false)
    }
  }, [search])

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
      <div style={previewStyle}>
        <SearchPreview searchItems={searchItems} search={search} />
      </div>
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
