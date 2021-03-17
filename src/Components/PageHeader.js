import { Link } from "react-router-dom";

const PageHeader = (props) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <header style={headerStyle}>
      <Link to="/">
        <img alt="Logo" src={null}></img>
      </Link>
      <nav>
        <Link to="/profile">Sign In</Link>
        <Link to="/cart">
          <p>Cart</p>
          <p>{props.cart.length}</p>
        </Link>
      </nav>
    </header>
  );
};

export default PageHeader;
