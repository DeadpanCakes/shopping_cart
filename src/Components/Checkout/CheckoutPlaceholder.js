import { Link } from "react-router-dom";
import errorImg from '../../img/sadPlant.png';

const CheckoutPlaceholder = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imgStyle = {borderRadius: '20px', marginBottom: 10}

  return (
    <div style={containerStyle}>
        <img src={errorImg} alt="A sad plant" style={imgStyle}></img>
      <h1>Something Went Wrong...</h1>
      <Link to='/'>
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default CheckoutPlaceholder;
