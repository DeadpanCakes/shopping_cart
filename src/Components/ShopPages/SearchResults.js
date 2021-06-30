import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useSearch from "../../items/itemHooks/useSearch";

const SearchResults = () => {
  const location = useLocation();
  const searchStr = location.search.substring(2);
  const search = useSearch();
  const results = search(searchStr);

  const [formSearch, setFormSearch] = useState(searchStr);
  const handleInput = (input) => {
    setFormSearch(input);
  };

  const history = useHistory();
  const handleSubmit = () => {
    history.push(`/shop/search?=${formSearch}`);
  };

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "25px 0",
    minWidth: "65vw",
  };

  const imgStyle = {
    maxHeight: 125,
  };

  const breakStyle = {
    opacity: "60%",
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "stretch",
          width: '100%',
          minHeight: '20vh'
        }}
      >
        <div style={{alignSelf: "center" }}>
          <input
            value={formSearch}
            onChange={(e) => {
              handleInput(e.target.value);
            }}
          ></input>
          <button>Submit</button>
        </div>
        <h2 style={{ marginTop: 'auto', alignSelf: 'center' }}>
          {results.length} result(s) for '{searchStr}'
        </h2>
        <hr style={{ ...breakStyle, width: "95%"}}></hr>
      </section>
      <ul>
        {results.map((result) => {
          return (
            <Link
              to={`/shop/item/${result.id}`}
              key={result.id}
              className="itemLink"
            >
              <li>
                <div style={infoStyle}>
                  <img
                    alt={`A(n) ${result.name}`}
                    src={result.imgSrc}
                    style={imgStyle}
                  />
                  <h2>{result.name}</h2>
                  <h2>${result.price}</h2>
                </div>
                <hr style={breakStyle} />
              </li>
            </Link>
          );
        })}
      </ul>
    </form>
  );
};

export default SearchResults;
