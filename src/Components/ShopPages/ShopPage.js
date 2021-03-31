import { useState, Fragment } from "react";
import ShopHero from "./ShopHero";
import CategoryPage from "./CategoryPage";
import useStock from "../../items/useStock";
import useSort from "../../items/useSort";
import useFilter from "../../items/useFilter";
import useTagList from "../../items/useTagList";
import ShopSideBar from "./ShopSideBar";

const ShopPage = (props) => {
  const { category } = props;
  const [sortCriteria, setSortCriteria] = useState('id');
  const [filterTags, setFilterTags] = useState([]);
  const [strictSearch, setStrictSearch] = useState(true)

  const stock = useStock(category);
  const sortedStock = useSort(stock, sortCriteria);
  const filteredStock = useFilter(sortedStock, filterTags, strictSearch);
  const applicableTags = useTagList(stock)

  return (
    <Fragment>
      <ShopHero category={category} />
      <div style={{display:'flex'}}>
        <ShopSideBar category={category} filterTags={filterTags} setFilterTags={setFilterTags} applicableTags={applicableTags} strictSearch={strictSearch} setStrictSearch={setStrictSearch} />
        <CategoryPage category={category} stock={filteredStock} setSortCriteria={setSortCriteria}/>
      </div>
    </Fragment>
  );
};

export default ShopPage;
