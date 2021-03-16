import { Fragment, useState } from "react";

const ItemPage = (props) => {
  const { item } = props;
  const { name, price, imgSrc } = item;

  const [count, setCount] = useState(1);
  const handleInput = (value) => {
    console.log(typeof(Number(value)))
    return typeof(Number(value)) === "number" && !isNaN(Number(value)) ? setCount(value) : console.log(Number(value))
  };

  return (
    <Fragment>
      <img alt={name} src={imgSrc}></img>
      <div>
        <h1>{name}</h1>
        <h2>${price}.00</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <button onClick={() => setCount(count - 1)}>-</button>
          <input value={count} onChange={(e) => handleInput(e.target.value)}/>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button>Add To Cart</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ItemPage;
