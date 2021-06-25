import { Link, useLocation } from "react-router-dom";
import useSearch from "../../items/itemHooks/useSearch";

const SearchResults = () => {
  const location = useLocation();
  const searchStr = location.search.substring();
  const search = useSearch();
  const results = search(searchStr.substring(2));

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "25px 0",
    minWidth: '65vw'
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
    >
      <div style={{ alignSelf: 'stretch'}}>
        <input></input>
        <button>Submit</button>
        <hr style={breakStyle}></hr>
        <h3 style={{width: '100%'}}>Result(s) : {results.length}</h3>
      </div>
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
