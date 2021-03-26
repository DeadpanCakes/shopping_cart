import { useState, useEffect, Fragment } from "react";
import StoreNav from "./StoreNav";
import ShopHero from "./ShopHero";
import CategoryPage from "./CategoryPage";
import fullStock from '../../items/stock';
import useStock from "../../items/useStock";
import useSort from "../../items/useSort";

const ShopPage = (props) => {
  const { category } = props;
  const [sortCriteria, setSortCriteria] = useState('id');
  const [filterTags, setFilterTags] = useState([]);

  const stock = useStock(category);
  const sortedStock = useSort(stock, sortCriteria);

  return (
    <Fragment>
      <ShopHero category={category} />
      <div style={{display:'flex'}}>
        <StoreNav category={category} stock={sortedStock}/>
        <CategoryPage category={category} stock={sortedStock} setSortCriteria={setSortCriteria}/>
      </div>
    </Fragment>
  );
};

export default ShopPage;
