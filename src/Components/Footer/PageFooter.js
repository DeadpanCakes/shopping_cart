import { Link } from "react-router-dom";
import SocialMedia from './SocialMedia';

const PageFooter = () => {
  const footerStyle = {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#1C2F4A",
    height: '5vh',
  };

  const footerNav = {
    padding: '5px 10px'
  }

  return (
    <footer style={footerStyle}>
      <p style={footerNav}>Store Place Copyright 2021 All Rights Reserved</p>
      <SocialMedia size='lg'/>
      <nav style={{display:'flex'}}>
        <Link style={footerNav} className='footerLink' to="/contact">Contact</Link>
        <Link style={footerNav} className='footerLink' to="/about">About</Link>
        <Link style={footerNav} className='footerLink' to="/shipping">Shipping And Terms</Link>
      </nav>
    </footer>
  );
};
export default PageFooter;
