import { useEffect } from "react";

const SortControl = (props) => {
  const {
    category,
    sortByPrice,
    revSortByPrice,
    sortByAlpha,
    revSortbyAlpha,
    sortById,
    setPage,
  } = props.sort;

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
        break;
    }
    setPage(0);
  };

  useEffect(()=>{
    document.getElementById('sortSelect').selectedIndex=0
  },[category])

  return (
    <form>
      <label>
        Sort By:
        <select id="sortSelect" onChange={handleSort}>
          <option selected value="id">
            Bestselling
          </option>
          <option value="price">Price (Low to High)</option>
          <option value="revPrice">Price (High to Low)</option>
          <option value="name">Name (Alphabetical)</option>
          <option value="revName">Name (Reverse Alphabetical)</option>
        </select>
      </label>
    </form>
  );
};

export default SortControl;
