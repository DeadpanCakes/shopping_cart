import { Fragment } from "react";
import { Link } from "react-router-dom";

const StoreNav = () => {
  const toggleNav = () => {
    console.log('toggled')
  }

  return (
    <Fragment>
      <Link to="/shop">Go Back</Link>
      <button onClick={toggleNav}>
        <h2>Navigation</h2>
      </button>
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
    </Fragment>
  );
};

export default StoreNav;
