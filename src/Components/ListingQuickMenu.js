import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <button
            onClick={handleSubmit}
            style={{ height: "50%", width: "100%", padding: 10 }}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            style={{ height: "50%", width: "100%", padding: "10px 25px" }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
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
