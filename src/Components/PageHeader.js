import { Link } from "react-router-dom";

const PageHeader = () => {
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
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default PageHeader;
