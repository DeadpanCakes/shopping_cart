import { Fragment, useState } from "react";
import stock from "../../items/stock";
import CartPage from "../CartPage";
const ItemPage = (props) => {
  const { id } = props.match.params;
  const { cart, addToCart, updateQuantity } = props;

  const fetchItem = (productId) => {
    return stock.items.find((product) => product.id === productId);
  };

  const item = fetchItem(id);

  const [count, setCount] = useState(1);
  const handleIncrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
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
    const newItem = { ...item, quantity: e.target.quantity.value };
    if (cart.some((item) => item.id === newItem.id)) {
      updateQuantity(newItem);
    } else {
      props.addToCart(newItem);
    }
  };

  return (
    <Fragment>
      <img alt={item.name} src={item.src}></img>
      <div>
        <h1>{item.name}</h1>
        <h2>${item.price}.00</h2>
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
      </div>
    </Fragment>
  );
};

export default ItemPage;
