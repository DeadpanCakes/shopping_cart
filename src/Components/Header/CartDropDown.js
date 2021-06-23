import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDownListing from "./DropDownListing";

const CartDropDown = (props) => {
  const { items, cartVisible, removeItem } = props;
  const [subtotal, setSubtotal] = useState("");

  useEffect(() => {
    if (items.length > 1) {
      const reducedPrices = items.reduce((total, item) => {
        if (typeof total === "number") {
          return total + item.price;
        }
        return item.price + total.price;
      });
      setSubtotal(reducedPrices);
    } else if (items.length > 0) {
      setSubtotal(items[0].price);
    } else {
      setSubtotal("");
    }
  }, [items]);

  const dropdownStyle = {
    display: cartVisible ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    width: "25vw",
    right: "-10%",
    top: "170%",
    backgroundColor: "#f6c7c7",
    border: "#f12b6b 2px solid",
    borderRadius: 10,
    padding: 20,
    color: "#2a2b2a",
  };

  return (
    <div style={dropdownStyle}>
      {items.length > 0 ? (
        <>
          <ul
            style={{
              backgroundColor: "white",
              padding: 5,
              maxHeight: 130,
              overflowY: "auto",
              marginBottom: 20,
            }}
          >
            {items.map((item) => (
              <DropDownListing item={item} key={item.id} removeItem={removeItem}/>
            ))}
          </ul>

          <h3>Subtotal: ${subtotal}</h3>
          <p>Shipping & Tax Calculated At Checkout</p>

          <div>
            <Link to="/cart">
              <button>Go To Cart</button>
            </Link>
            <Link to="/cart/checkout">
              <button>Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: "center" }}>Your Cart Is Empty</h2>
      )}
    </div>
  );
};

export default CartDropDown;
