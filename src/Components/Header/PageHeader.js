import { Link } from "react-router-dom";
import logo from "../../img/headerLogo.png";
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageHeader = (props) => {
  const containerStyle = {
    width: "100vw",
    height: "10vh",
    borderBottom: "10px solid #1C2F4A",
  };

  const headerStyle = {
    position: "fixed",
    height: "10vh",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#507DBC",
    borderBottom: "10px solid #1C2F4A",
    zIndex: "1",
  };

  const navContainerStyle = {
    display: "flex",
    marginBottom: '20px',
    marginRight: "20px",
    alignItems: "flex-end",
  };

  return (
    <div className="headerContainer" style={containerStyle}>
      <header style={headerStyle}>
        <Link to="/" style={{ width: "5%" }}>
          <img alt="Logo" src={logo} style={{ height: "100%" }}></img>
        </Link>
        <nav style={navContainerStyle}>
          <Link to="/profile" className="headerNav">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/cart" className="headerNav" id="headerCart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {props.cart.length > 0 ? (
              <p id="cartCount" style={{fontSize: '1em'}}>
                {props.cart.length}
              </p>
            ) : null}
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default PageHeader;
