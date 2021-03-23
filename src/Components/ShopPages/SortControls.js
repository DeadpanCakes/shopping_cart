const SortControl = (props) => {
    const {sortByPrice, revSortByPrice, sortByAlpha, revSortbyAlpha, sortById} = props.sort
    
    const handleSort = (e) => {
      const criteria = e.target.value;
      console.log(criteria)
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