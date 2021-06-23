import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartDropDown = (props) => {
  const { items, cartVisible } = props;
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
    width: "15vw",
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
      <ul style={{ backgroundColor: "white", padding: 5, maxHeight: 130, overflowY: 'auto', marginBottom: 20 }}>
        {items.map((item) => (
          <li>
            <p>{item.name}</p>
          </li>
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
    </div>
  );
};

export default CartDropDown;
