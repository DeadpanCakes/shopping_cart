const CartListing = (props) => {
  const {
    item,
    removeItem,
    handleInput,
    incrementQuantity,
    decrementQuantity,
  } = props;
  const { id, name, price, quantity } = item;

  return (
    <li>
      <img alt={name} src={item.imgSrc} />
      <h2>{name}</h2>
      <form name={id} onSubmit={(e) => e.preventDefault()}>
        <button onClick={decrementQuantity}>-</button>
        <input name="quantity" value={item.quantity} onChange={handleInput} />
        <button onClick={incrementQuantity}>+</button>
        <button onClick={() => removeItem(item)}>Remove</button>
      </form>
      <p>${price * quantity}</p>
    </li>
  );
};

export default CartListing;
