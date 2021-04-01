import { Link } from "react-router-dom";
import logo from "../img/headerLogo.png";

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
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#507DBC",
    borderBottom: "10px solid #1C2F4A",
    zIndex: "1",
  };

  const navContainerStyle = {
    display: "flex",
    marginRight: "30px",
    alignItems: "center",
  };

  return (
    <div className="headerContainer" style={containerStyle}>
      <header style={headerStyle}>
        <Link to="/" style={{ width: "5%" }}>
          <img alt="Logo" src={logo} style={{ height: "100%" }}></img>
        </Link>
        <nav style={navContainerStyle}>
          <Link to="/profile" className='headerNav'>
            Sign In
          </Link>
          <Link to="/cart" className='headerNav'>
            Cart
            <p style={{}}>{props.cart.length}</p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default PageHeader;
