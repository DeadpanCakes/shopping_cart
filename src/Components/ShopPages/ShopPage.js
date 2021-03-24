import { useState, useEffect, Fragment } from "react";
import StoreNav from "./StoreNav";
import ShopHero from "./ShopHero";
import CategoryPage from "./CategoryPage";
import fullStock from '../../items/stock';

const ShopPage = (props) => {
  const { category } = props;

  const [stock, setStock] = useState([]);

  useEffect(() => {
    switch (category) {
      case "Houseplants":
        setStock(fullStock.houseplants)
        break;
      case "Succulents":
        setStock(fullStock.succulents)
        break;
      case "Tillandsia":
        setStock(fullStock.tillandsia)
        break;
      case "Supplies":
        setStock(fullStock.supplies)
        break;
      default:
        setStock(fullStock.items);
        break;
    }
  }, [category]);

  return (
    <Fragment>
      <ShopHero category={category} />
      <div style={{display:'flex'}}>
        <StoreNav />
        <CategoryPage category={category} stock={stock} setStock={setStock}/>
      </div>
    </Fragment>
  );
};

export default ShopPage;
