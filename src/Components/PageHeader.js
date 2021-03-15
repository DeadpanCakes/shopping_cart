import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <header>
      <img alt="Logo" src={null}></img>
      <nav>
        <Link to="/profile">Sign In</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default PageHeader;
