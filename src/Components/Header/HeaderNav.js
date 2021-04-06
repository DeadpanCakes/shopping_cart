import { Link } from "react-router-dom";
import logo from "../../img/headerLogo.png";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderNav = (props) => {
  const { cart } = props;

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "10vh",
  };

  return (
    <nav style={navContainerStyle}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "100%",
          minWidth: "100vw",
        }}
      >
        <li>
          <Link to="/" style={{ width: "5%" }}>
            <img alt="Logo" src={logo} style={{ maxHeight: "100%" }}></img>
          </Link>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <Link to="/profile" className="headerNav">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/cart" className="headerNav" id="headerCart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cart.length > 0 ? (
              <p id="cartCount" style={{ fontSize: "1em" }}>
                {cart.length}
              </p>
            ) : null}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
