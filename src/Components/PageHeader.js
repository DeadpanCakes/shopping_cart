import { Link } from "react-router-dom";

const PageHeader = (props) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    backgroundColor: '#28587B',
    borderBottom: '2px solid #19374D',
    padding: '10px'
  }

  const navStyle={
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#3C85B9",
    borderRadius: '10px',
    padding: '5px'
  }

  return (
    <header style={headerStyle}>
      <Link to="/">
        <img alt="Logo" src={null}></img>
      </Link>
      <nav style={navStyle}>
        <Link to="/profile" style={{paddingRight: '5px'}}>Sign In</Link>
        <Link to="/cart">
          <p>Cart</p>
          <p>{props.cart.length}</p>
        </Link>
      </nav>
    </header>
  );
};

export default PageHeader;
