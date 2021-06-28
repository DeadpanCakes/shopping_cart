import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchPreview = (props) => {
  const { search, searchItems } = props;
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(searchItems(search));
  }, [search, searchItems]);

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#2a2b2a",
  };

  const listingStyle = {
    display: "flex",
  };

  const imgStyle = {
    maxHeight: 100,
  };

  const infoSectionStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <ul style={listStyle}>
      {results.length > 0 ? (
        results.slice(0, 3).map((result) => {
          return (
            <Link
              to={`/shop/item/${result.id}`}
              key={result.id}
              className="itemLink"
            >
              <li style={listingStyle}>
                <img
                  alt={`A(n) ${result.name}`}
                  src={result.imgSrc}
                  style={imgStyle}
                />
                <section style={infoSectionStyle}>
                  <h2>{result.name}</h2>
                  <p>${result.price}</p>
                </section>
              </li>
            </Link>
          );
        })
      ) : search.length > 0 ? (
        <h2>No Matches</h2>
      ) : null}
    </ul>
  );
};

export default SearchPreview;
