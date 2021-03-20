import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopHero from "./ShopHero";
import ItemListing from "../ItemListing";
import houseplantHero from "./img/houseplantHero.png";
import succulentHero from "./img/succulentHero.png";
import tillyHero from "./img/tillyHero.png";
import supplyHero from "./img/suppliesHero.png";
import fullStock from "../../items/stock";

const HouseplantHero = () => (
  <ShopHero src={houseplantHero} alt="A row of potted houseplants" />
);
const SucculentHero = () => (
  <ShopHero src={succulentHero} alt="A pastel succulent arrangement" />
);
const TillyHero = () => (
  <ShopHero src={tillyHero} alt="A pile of healthy tillandsia" />
);
const SupplyHero = () => (
  <ShopHero src={supplyHero} alt="A box of gardening tools" />
);

const CategoryPage = (props) => {
  const getHero = () => {
    switch (category) {
      case "Succulents":
        return <SucculentHero />;
      case "Tillandsia":
        return <TillyHero />;
      case "Supplies":
        return <SupplyHero />;
      default:
        return <HouseplantHero />;
    }
  };
  const { category } = props;
  const [sort, setSort] = useState("alpha");

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
    setStock([...stock].sort((prevItem, item) => prevItem.price - item.price))
  }

  const revSortByPrice = () => {
    setStock([...stock].sort((prevItem, item) => item.price - prevItem.price))
  }

  const sortByAlpha = () => {
    setStock([...stock].sort((prevItem, item) => {
      if (prevItem.name > item.name) {
        return 1;
      } else if (prevItem.name < item.name) {
        return -1;
      } else {
        return 0;
      }
    }))
  }

  const revSortbyAlpha = () => {
    setStock([...stock].sort((prevItem, item) => {
      if (prevItem.name < item.name) {
        return 1;
      } else if (prevItem.name < item.name) {
        return -1
      }
      return 0
    }))
  }

  const sortById = () => {
    setStock([...stock].sort((prevItem, item) => prevItem.id - item.id))
  }

  const handleSort = (e) => {
    const criteria = e.target.value
    switch (criteria) {
      case 'price': sortByPrice()
      break;
      case 'revPrice': revSortByPrice()
      break;
      case 'name': sortByAlpha()
      break;
      case 'revName': revSortbyAlpha()
      break;
      default: sortById()
    }
  }

  const [page, setPage] = useState(1);

  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    const shelves = [];
    for (let i = 1; i < stock.length / 9 + 1; i++)
      shelves.push(stock.slice((i - 1) * 9, i * 9));
    setShelves(shelves);
  }, [stock]);

  console.log(shelves);
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <Fragment>
      <h1>{category}</h1>
      {getHero()}
      <Link to="/shop">Go Back</Link>
      <main style={containerStyle}>
        <form>
          <label> Sort By:
          <select onChange={handleSort}>
            <option value='price'>Price (Low to High)</option>
            <option value='revPrice'>Price (High to Low)</option>
            <option value='name'>Name (Alphabetical)</option>
            <option value='revName'>Name (Reverse Alphabetical)</option>
          </select>
          </label>
        </form>
        {stock.map((item) => (
          <ItemListing key={item.key} item={item} />
        ))}
        <button onClick={sortByAlpha}>alpha Desc</button>
        <button onClick={sortByAlpha}>alpha Asc</button>
        <button onClick={revSortByPrice}>Price Asce</button>
        <button onClick={revSortByPrice}>Price Desc</button>
      </main>
    </Fragment>
  );
};

export default CategoryPage;
