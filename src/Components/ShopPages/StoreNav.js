import { Link } from "react-router-dom";

const StoreNav = () => {
  return (
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
  );
};

export default StoreNav;
