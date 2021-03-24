import { useState, useEffect } from "react";
import ItemListing from "../ItemListing";
import PageNav from "./PageNav";
import SortControl from "./SortControls";

const CategoryPage = (props) => {
  const { category, stock, setStock } = props;

  const sortByPrice = () => {
    setStock([...stock].sort((prevItem, item) => prevItem.price - item.price));
  };

  const revSortByPrice = () => {
    setStock([...stock].sort((prevItem, item) => item.price - prevItem.price));
  };

  const sortByAlpha = () => {
    setStock(
      [...stock].sort((prevItem, item) => {
        if (prevItem.name > item.name) {
          return 1;
        } else if (prevItem.name < item.name) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  };

  const revSortbyAlpha = () => {
    setStock(
      [...stock].sort((prevItem, item) => {
        if (prevItem.name < item.name) {
          return 1;
        } else if (prevItem.name < item.name) {
          return -1;
        }
        return 0;
      })
    );
  };

  const sortById = () => {
    setStock([...stock].sort((prevItem, item) => prevItem.key - item.key));
  };

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
          sortByAlpha,
          revSortbyAlpha,
          sortByPrice,
          revSortByPrice,
          sortById,
          setPage
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
