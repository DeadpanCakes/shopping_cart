import { useState, Fragment } from "react";
import ShelfHero from "./ShelfHero";
import Shelf from "./Shelf";
import useStock from "../../items/itemHooks/useStock";
import useSort from "../../items/itemHooks/useSort";
import useFilter from "../../items/itemHooks/useFilter";
import useTagList from "../../items/itemHooks/useTagList";
import ShopSideBar from "./SideBar/ShopSideBar";

const ShopPage = (props) => {
  const { category } = props;
  const [sortCriteria, setSortCriteria] = useState("id");
  const [filterTags, setFilterTags] = useState([]);
  const [strictSearch, setStrictSearch] = useState(true);

  const stock = useStock(category);
  const sortedStock = useSort(stock, sortCriteria);
  const filteredStock = useFilter(sortedStock, filterTags, strictSearch);
  const applicableTags = useTagList(stock);

  return (
    <Fragment>
      <ShelfHero category={category} />
      <div className='shopPage'>
        <ShopSideBar
          category={category}
          filterTags={filterTags}
          setFilterTags={setFilterTags}
          applicableTags={applicableTags}
          appliedTags={filterTags}
          strictSearch={strictSearch}
          setStrictSearch={setStrictSearch}
          stock={filteredStock}
        />
        <Shelf
          category={category}
          stock={filteredStock}
          setSortCriteria={setSortCriteria}
        />
      </div>
    </Fragment>
  );
};

export default ShopPage;
