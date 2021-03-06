import { useState } from "react";
import { Link } from "react-router-dom";

const StoreNav = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded((prevState) => (prevState ? false : true));
  };

  const handleNavClick = () => {
    toggleNav();
  };

  const navLinkStyle = {
    padding: "5px",
    width: "100%",
    backgroundColor: "white",
    border: "1px solid gray",
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button
        className={
          expanded
            ? "storeNavButton expandedStoreNavButton"
            : "storeNavButton collapsedStoreNavButton"
        }
        onClick={toggleNav}
      >
        <h2>Navigation</h2>
      </button>
      <nav
        className={expanded ? "expandedStoreNav storeNav" : "storeNav"}
        style={expanded ? { maxHeight: "300px" } : { maxHeight: "0" }}
      >
        <ul id="shopNavList">
          <li style={navLinkStyle} className="navLink">
            <Link to="/shop">
              <h2>Home</h2>
            </Link>
          </li>
          <li style={navLinkStyle} className="navLinkContainer">
            <Link to="/shop/all" onClick={handleNavClick} className="navLink">
              <h2>All</h2>
            </Link>
          </li>
          <li style={navLinkStyle} className="navLinkContainer">
            <Link
              to="/shop/houseplants"
              onClick={handleNavClick}
              className="navLink"
            >
              <h2>Houseplants</h2>
            </Link>
          </li>
          <li style={navLinkStyle} className="navLinkContainer">
            <Link
              to="/shop/succulents"
              onClick={handleNavClick}
              className="navLink"
            >
              <h2>Succulents</h2>
            </Link>
          </li>
          <li style={navLinkStyle} className="navLinkContainer">
            <Link
              to="/shop/tillandsia"
              onClick={handleNavClick}
              className="navLink"
            >
              <h2>Tillandsia</h2>
            </Link>
          </li>
          <li style={navLinkStyle} className="navLinkContainer">
            <Link
              to="/shop/supplies"
              onClick={handleNavClick}
              className="navLink"
            >
              <h2>Supplies</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StoreNav;
