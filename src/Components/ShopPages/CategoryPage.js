import { useState, useEffect } from "react";
import ItemListing from "../ItemListing";
import PageNav from "./PageNav";
import SortControl from "./SortControls";

const CategoryPage = (props) => {
  const { category, stock, setSortCriteria } = props;

  const [page, setPage] = useState(0);

  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    const shelves = [];
    for (let i = 1; i < stock.length / 9 + 1; i++)
      shelves.push(stock.slice((i - 1) * 9, i * 9));
    setShelves(shelves);
  }, [stock]);

  useEffect(() => {
    setPage(0)
  }, [category])

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: 'center'
  };

  return (
    <div style={{flexGrow: '10fr', width:'85vw', padding: '20px'}}>
      <SortControl
        sort={{
          category,
          setPage,
          setSortCriteria
        }}
      />
      <main style={containerStyle}>
        {shelves[page]
          ? shelves[page].map((item) => (
              <ItemListing key={item.key} item={item} />
            ))
          : null}
      </main>
      <PageNav page={page} shelves={shelves} setPage={setPage} />
    </div>
  );
};

export default CategoryPage;
