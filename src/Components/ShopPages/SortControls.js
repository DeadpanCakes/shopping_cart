import { useEffect } from "react";

const SortControl = (props) => {
  const {category,setSortCriteria} = props.sort;

  const handleSort = (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria)
  };

  useEffect(() => {
    document.getElementById("sortSelect").selectedIndex = 0;
  }, [category]);

  return (
    <form>
      <label>
        Sort By:
        <select id="sortSelect" onChange={handleSort} defaultValue='id' >
          <option value="id">
            Bestselling
          </option>
          <option value="price">Price (Low to High)</option>
          <option value="revPrice">Price (High to Low)</option>
          <option value="alpha">Name (Alphabetical)</option>
          <option value="revAlpha">Name (Reverse Alphabetical)</option>
        </select>
      </label>
    </form>
  );
};

export default SortControl;
