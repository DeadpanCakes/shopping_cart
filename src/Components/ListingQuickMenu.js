import { useState } from "react";

const ListingQuickMenu = (props) => {
  const { addToCart, item } = props;

  const [count, setCount] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => {
      return prevCount >= 9 ? prevCount : prevCount + 1;
    });
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => {
      return prevCount <= 1 ? prevCount : prevCount - 1;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    addToCart({ ...item, quantity: count });
  };

  const formStyle = {
    display: "flex",
    height: "35%",
    alignItems: "center",
    marginBottom: "20px",
  };

  return (
    <div className="quickMenu">
      <button
        style={{
          marginBottom: "20px",
        }}
      >
        Go To Listing
      </button>
      <form onSubmit={handleSubmit} style={formStyle}>
        <button onClick={handleSubmit} style={{ height: "100%" }}>
          Add To Cart
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minWidth: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: "1",
              backgroundColor: "#f0f8ff",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgb(80, 76, 76)",
            }}
          >
            <h3>{count}</h3>
          </div>
          <button onClick={handleIncrement} style={{ flex: "1", padding: 0 }}>
            +
          </button>
          <button onClick={handleDecrement} style={{ flex: "1", padding: 0 }}>
            -
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingQuickMenu;
