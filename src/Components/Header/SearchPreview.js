import { useState, useEffect } from "react";

const SearchPreview = (props) => {
  const { search, searchItems } = props;
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(searchItems(search));
  }, [search, searchItems]);

  const listStyle = {
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      color: '#2a2b2a'
  }

  return (
    <ul style={listStyle}>
      {results.length > 0 ? (
        results.slice(0,3).map((result) => {
          return <li key={result.id}>{result.name}</li>;
        })
      ) : (
        <h2>No Matches</h2>
      )}
    </ul>
  );
};

export default SearchPreview;
