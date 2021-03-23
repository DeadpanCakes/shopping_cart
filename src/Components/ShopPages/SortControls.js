const SortControl = (props) => {
    const {sortByPrice, revSortByPrice, sortByAlpha, revSortbyAlpha, sortById, setPage} = props.sort
    
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
      setPage(0)
    };
  return (
    <form>
      <label>
        Sort By:
        <select onChange={handleSort}>
          <option selected value='id'>Bestselling</option>
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