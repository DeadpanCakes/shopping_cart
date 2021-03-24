import { Fragment } from "react";
import { Link } from "react-router-dom";

const StoreNav = () => {
  const tagArr = ["Drought Resistant", "Low Light", "Overwater Resistant"];

  return (
    <aside style={{ width: '13vw', backgroundColor: "#28587B", padding: '10px' }}>
      <Link to="/shop">Go Back</Link>
      <h2>Navigation</h2>
      <nav>
        <ul>
          <Link to="/shop/allplants">
            <li>
              <h2>All Plants</h2>
            </li>
          </Link>
          <Link to="/shop/houseplants">
            <li>
              <h2>Housplants</h2>
            </li>
          </Link>
          <Link to="/shop/succulents">
            <li>
              <h2>Succulents</h2>
            </li>
          </Link>
          <Link to="/shop/tillandsia">
            <li>
              <h2>Tillandsia</h2>
            </li>
          </Link>
          <Link to="/shop/supplies">
            <li>
              <h2>Supplies</h2>
            </li>
          </Link>
        </ul>
      </nav>
      <h2>Filter</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        {tagArr.map((tag) => {
          return (
            <label key={tag}>
              <input type="checkbox" value={tag} />
              {tag}
            </label>
          );
        })}
      </form>
    </aside>
  );
};

export default StoreNav;
