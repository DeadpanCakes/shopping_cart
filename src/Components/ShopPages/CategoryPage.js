import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopHero from "./ShopHero";
import ItemListing from "../ItemListing";
import fullStock from "../../items/stock";
import PageNav from "./PageNav";

const CategoryPage = (props) => {
  const { category } = props;

  const fetchStock = () => {
    switch (category) {
      case "Houseplants":
        return fullStock.houseplants;
      case "Succulents":
        return fullStock.succulents;
      case "Tillandsia":
        return fullStock.tillandsia;
      case "Supplies":
        return fullStock.supplies;
      default:
        return fullStock.items;
    }
  };

  const [stock, setStock] = useState(fetchStock());

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

  const handleSort = (e) => {
    const criteria = e.target.value;
    switch (criteria) {
      case "price":
        sortByPrice();
        break;
      case "revPrice":
        revSortByPrice();
        break;
      case "name":
        sortByAlpha();
        break;
      case "revName":
        revSortbyAlpha();
        break;
      default:
        sortById();
    }
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
      <Link to="/shop">Go Back</Link>
      <form>
        <label>
          Sort By:
          <select onChange={handleSort}>
            <option value="price">Price (Low to High)</option>
            <option value="revPrice">Price (High to Low)</option>
            <option value="name">Name (Alphabetical)</option>
            <option value="revName">Name (Reverse Alphabetical)</option>
          </select>
        </label>
      </form>
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
