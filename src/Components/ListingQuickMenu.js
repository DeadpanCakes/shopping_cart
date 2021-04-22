import { useState, useEffect } from "react";

const ListingQuickMenu = (props) => {
  const [count, setCount] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
  };

  const formStyle = {
    display: "flex",
    height: "35%",
    alignItems: "center",
  };
  const test = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement);
  };

  return (
    <div style={containerStyle}>
      <button>Go To Listing</button>
      <form onSubmit={handleSubmit} style={formStyle}>
        <button onClick={test} style={{ height: "100%" }}>
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
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgb(80, 76, 76)'
            }}
          >
            <h3
            >
              {count}
            </h3>
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
