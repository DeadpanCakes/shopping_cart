import { useState } from "react";

const ItemControls = (props) => {
  const { item, cart, addToCart, updateQuantity } = props;

  const [count, setCount] = useState(1);
  const handleIncrement = (e) => {
    e.preventDefault();
    if (count < 20) setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const handleInput = (value) => {
    if (typeof Number(value) === "number" && !isNaN(Number(value))) {
      setCount(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...item, quantity: Number(e.target.quantity.value) };
    if (cart.some((item) => item.id === newItem.id)) {
      updateQuantity(newItem);
    } else {
      addToCart(newItem);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleDecrement}>-</button>
      <input
        value={count}
        onChange={(e) => handleInput(e.target.value)}
        name="quantity"
      />
      <button onClick={handleIncrement}>+</button>
      <button>Add To Cart</button>
    </form>
  );
};

export default ItemControls;
