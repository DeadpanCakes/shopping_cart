import { Link } from "react-router-dom";

const PageFooter = () => {
  const footerStyle = {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-end",
  };

  return (
    <footer style={footerStyle}>
      <p style={{marginRight: 'auto'}}>Store Place Copyright 2021 All Rights Reserved</p>
      <nav style={{display:'flex'}}>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/shipping">Shipping And Terms</Link>
      </nav>
    </footer>
  );
};
export default PageFooter;
