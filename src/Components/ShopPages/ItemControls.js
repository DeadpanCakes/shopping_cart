import { useEffect, useState } from "react";
import Loader from "../Loader";

const ItemControls = (props) => {
  const { item, addToCart } = props;

  const [isBeingAdded, setIsBeingAdded] = useState(false);
  const toggleAdd = async () => {
      setIsBeingAdded(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 400);
      });
      setIsBeingAdded(false);
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isBeingAdded) {
    const newItem = { ...item, quantity: Number(count) };
    await toggleAdd();
    addToCart(newItem);
    }
  };

  useEffect(() => {
    setCount(1);
  }, [item]);

  const thing = {
    display: "fixed",
    position: "absolute",
    height: "100%",
    width: "100vw",
    left: "0",
    bottom: "0",
    backgroundColor: "gray",
    opacity: "0.8",
  };

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
