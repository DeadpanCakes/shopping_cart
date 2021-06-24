import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/headerLogo.png";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewItemIcon from "./NewItemIcon";
import ProfileDropdown from "./ProfileDropdown";
import CartDropDown from "./CartDropDown";
import SearchBar from "./SearchBar";

const HeaderNav = (props) => {
  const { cart, removeItem } = props;

  const [addingToCart, setAddingToCart] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible((prevState) => !prevState);
  const [cartVisible, setCartVisible] = useState(false);
  const toggleCart = () => setCartVisible((prevState) => !prevState);

  const cartRef = useRef(cart.length);
  const location = useLocation();
  const locationRef = useRef(location);

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

  useEffect(() => {
    const unfocusDropdown = (event) => {
      if (!event.target.matches(".dropdownBtn *")) {
        setMenuVisible(false);
        setCartVisible(false);
      }
    };
    document.addEventListener("click", unfocusDropdown);
    return () => document.removeEventListener("click", unfocusDropdown);
  }, []);

  useEffect(() => {
    if (location.pathname !== locationRef.current.pathname) {
      setMenuVisible(false);
      setCartVisible(false);
      locationRef.current = location;
    }
  }, [location]);

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
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            marginLeft: "auto",
          }}
        >
          <div style={{ position: "relative" }} className="dropdownBtn">
            <button id="profileBtn" className="headerNav" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <ProfileDropdown isVisible={menuVisible} toggleMenu={toggleMenu} />
          </div>
          <div
            style={{ padding: 0, position: "relative" }}
            className="dropdownBtn"
          >
            <button className="headerNav" id="headerCart" onClick={toggleCart}>
              {addingToCart ? <NewItemIcon /> : null}
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cart.length > 0 ? (
                <p id="cartCount" style={{ fontSize: "1em" }}>
                  {cart.length}
                </p>
              ) : null}
            </button>
            <CartDropDown
              items={cart}
              cartVisible={cartVisible}
              removeItem={removeItem}
            />
          </div>
            <SearchBar />
        </li>
      </ul>
      <p>{cartRef.current.toString()}</p>
    </nav>
  );
};

export default HeaderNav;
