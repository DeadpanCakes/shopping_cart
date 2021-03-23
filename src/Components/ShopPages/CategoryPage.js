import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopHero from "./ShopHero";
import ItemListing from "../ItemListing";
import fullStock from "../../items/stock";
import PageNav from "./PageNav";
import SortControl from './SortControls';
import StoreNav from "./StoreNav";

const CategoryPage = (props) => {
  const { category } = props;

  const [stock, setStock] = useState([]);

  useEffect(() =>{
    let cat
    switch (category) {
      case "Houseplants":
        cat = fullStock.houseplants;
        break;
      case "Succulents":
        cat = fullStock.succulents;
        break;
      case "Tillandsia":
        cat= fullStock.tillandsia;
        break;
      case "Supplies":
        cat = fullStock.supplies;
        break;
      default:
        cat = fullStock.items;
        break;
    }
    setStock(cat)
  }, [category])

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
    setStock([...stock].sort((prevItem, item) => prevItem.id - item.id));
  };

  const [page, setPage] = useState(0);

  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    const shelves = [];
    for (let i = 1; i < stock.length / 9 + 1; i++)
      shelves.push(stock.slice((i - 1) * 9, i * 9));
    setShelves(shelves);
  }, [stock]);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <Fragment>
      <h1>{category}</h1>
      <ShopHero category={category} />
      <StoreNav />
      <Link to="/shop">Go Back</Link>
      <SortControl sort={{sortByAlpha, revSortbyAlpha, sortByPrice, revSortByPrice, sortById}} />
      <main style={containerStyle}>
        {shelves[page]
          ? shelves[page].map((item) => (
              <ItemListing key={item.key} item={item} />
            ))
          : null}
      </main>
      <PageNav
        page={page}
        shelves={shelves}
        setPage={setPage}
      />
    </Fragment>
  );
};

export default CategoryPage;
