import { Link } from "react-router-dom";
import TopBanner from "./TopBanner";
import logo from "../../img/headerLogo.png";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageHeader = (props) => {
  const containerStyle = {
    width: "100vw",
    height: "13vh",
    borderBottom: "10px solid #1C2F4A",
  };

  const headerStyle = {
    position: "fixed",
    height: "13vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#507DBC",
    borderBottom: "10px solid #1C2F4A",
    zIndex: "1",
  };

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    minHeight: '10vh'
  };

  return (
    <div className="headerContainer" style={containerStyle}>
      <header style={headerStyle}>
        <TopBanner />
        <nav style={navContainerStyle}>
          <ul style={{display: 'flex', justifyContent: 'space-between', minHeight: '100%', minWidth: '100vw'}}>
            <li>
            <Link to="/" style={{ width: "5%" }}>
              <img alt="Logo" src={logo} style={{ maxHeight: "100%" }}></img>
            </Link>
            </li>
            <li style={{display: 'flex', alignItems: 'center', marginRight: '20px',}}>
              <Link to="/profile" className="headerNav">
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/cart" className="headerNav" id="headerCart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {props.cart.length > 0 ? (
                  <p id="cartCount" style={{ fontSize: "1em" }}>
                    {props.cart.length}
                  </p>
                ) : null}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default PageHeader;
