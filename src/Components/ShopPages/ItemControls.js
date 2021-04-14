import { useEffect, useState } from "react";

const ItemControls = (props) => {
  const { item, addToCart } = props;

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
    const newItem = { ...item, quantity: Number(count) };
    addToCart(newItem);
  };

  useEffect(() => {
    setCount(1);
  }, [item])

  return (
    <form>
      <button onClick={handleDecrement}>-</button>
      <input
        value={count}
        onChange={(e) => handleInput(e.target.value)}
        name="quantity"
      />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleSubmit}>Add To Cart</button>
    </form>
  );
};

export default ItemControls;
