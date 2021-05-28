import { Link } from "react-router-dom";

const EmptyCart = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "50vh",
    marginTop: 40,
    opacity: "80%"
  };

  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#507dbc',
    padding: 30,
    height: 300,
    width: 600
  };

  const textContainer = {
    height: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  };

  const textStyle = {
    fontSize: "3em",
    color: "#A1C6EA",
    margin: 20
  };

  const linkStyle = {
    color: "#A1C6EA",
  };

  return (
    <div style={containerStyle}>
      <div style={bannerStyle}>
        <div style={textContainer}>
          <h2 style={textStyle}>Your Cart Is Empty</h2>
          <Link style={linkStyle} to="/shop" className="emptyCartLink">
            Go Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
