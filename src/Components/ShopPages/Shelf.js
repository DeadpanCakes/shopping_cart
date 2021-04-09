import { useState, useEffect, Fragment } from "react";
import ItemListing from "../ItemListing";
import PageNav from "./PageNav";
import SortControl from "./SortControls";
import sadPlant from "../../img/sadPlant.png"

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
    setPage(0);
  }, [category]);

  const empytContainer = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'

  }

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
  };

  const EmptyShelf = () => {
    return (
      <Fragment>
        <img src={sadPlant} alt='A Sad Plant'/>
        <h1 style={{fontSize:'3em'}}>Sorry, Nothing Found</h1>
        <p>Please try again with different tags, in another category, or turn off strict search</p>
      </Fragment>
    );
  };

  return (
    <div className='shelfContainer' style={{ flexGrow: "10fr", width: "80vw", padding: "20px" }}>
      <SortControl
        sort={{
          category,
          setPage,
          setSortCriteria,
        }}
      />
      <main style={shelves.length > 0 ? gridContainer : empytContainer}>
        {shelves[page] ? (
          shelves[page].map((item) => (
            <ItemListing key={item.key} item={item} />
          ))
        ) : (
          <EmptyShelf />
        )}
      </main>
      <PageNav page={page} shelves={shelves} setPage={setPage} />
    </div>
  );
};

export default CategoryPage;
