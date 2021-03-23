import { Link } from "react-router-dom";

const PageHeader = (props) => {
  const containerStyle = {
    width: '100vw',
    height: '5vh',
  }

  const headerStyle = {
    position: "fixed",
    height: '5vh',
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#28587B",
    borderBottom: "2px solid #19374D",
    zIndex: "1",
  };

  const navStyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3C85B9",
    borderRadius: "10px",
    marginRight: '30px',
  };

  return (
    <div className="headerContainer" style={containerStyle}>
      <header style={headerStyle}>
        <Link to="/">
          <img alt="Logo" src={null}></img>
        </Link>
        <nav style={navStyle}>
          <Link to="/profile" style={{ paddingRight: "5px" }}>
            Sign In
          </Link>
          <Link to="/cart">
            <p>Cart</p>
            <p>{props.cart.length}</p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default PageHeader;
