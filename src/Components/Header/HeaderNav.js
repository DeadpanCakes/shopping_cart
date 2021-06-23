import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/headerLogo.png";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewItemIcon from "./NewItemIcon";
import ProfileDropdown from "./ProfileDropdown";

const HeaderNav = (props) => {
  const { cart } = props;

  const [addingToCart, setAddingToCart] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible((prevState) => !prevState);

  const cartRef = useRef(cart.length);

  useEffect(() => {
    if (cart.length > 0 && cart.length > cartRef.current) {
      setAddingToCart(true);
      setTimeout(() => setAddingToCart(false), 300);
      cartRef.current = cart.length;
    }
  }, [cart]);

  const navContainerStyle = {
    display: "flex",
    height: "80%",
    flexGrow: "1",
  };

  return (
    <nav style={navContainerStyle}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "100%",
          minWidth: "100%",
          listStyle: "none",
        }}
      >
        <Link to="/" style={{ height: "100%", maxWidth: "200px" }}>
          <li style={{ height: "100%", maxWidth: "100%" }}>
            <img alt="Logo" src={logo} style={{ height: "100%" }}></img>
          </li>
        </Link>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div style={{ position: "relative" }}>
            <button id="profileBtn" className="headerNav" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <ProfileDropdown isVisible={menuVisible} toggleMenu={toggleMenu} />
          </div>
          <Link to="/cart" className="headerNav" id="headerCart">
            {addingToCart ? <NewItemIcon /> : null}
            <FontAwesomeIcon icon={faShoppingCart} />
            {cart.length > 0 ? (
              <p id="cartCount" style={{ fontSize: "1em" }}>
                {cart.length}
              </p>
            ) : null}
          </Link>
        </li>
      </ul>
      <p>{cartRef.current.toString()}</p>
    </nav>
  );
};

export default HeaderNav;
