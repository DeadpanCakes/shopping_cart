import { Fragment, useState } from "react";
import stock from '../../items/stock';
const ItemPage = (props) => {
  const { id } = props.match.params;

  const fetchItem = (productId) => {
    return stock.items.find((product) => product.id === productId)
  }

  const item = fetchItem(id)

  const [count, setCount] = useState(1);
  const handleInput = (value) => {
    if (typeof Number(value) === "number" && !isNaN(Number(value))) {
      setCount(value);
    }
  };

  return (
    <Fragment>
      <img alt={item.name} src={item.src}></img>
      <div>
        <h1>{item.name}</h1>
        <h2>${item.price}.00</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <button onClick={() => setCount(count - 1)}>-</button>
          <input value={count} onChange={(e) => handleInput(e.target.value)} />
          <button onClick={() => setCount(count + 1)}>+</button>
          <button>Add To Cart</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ItemPage;
