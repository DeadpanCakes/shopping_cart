import { Fragment, useState } from "react";
import stock from '../../items/stock';
const ItemPage = (props) => {

  const [count, setCount] = useState(1);
  const handleInput = (value) => {
    if (typeof Number(value) === "number" && !isNaN(Number(value))) {
      setCount(value);
    }
  };
  console.log(props)
  return (
    <Fragment>
      <img alt={'test'} src={null}></img>
      <div>
        <h1>test</h1>
        <h2>$1.00</h2>
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
