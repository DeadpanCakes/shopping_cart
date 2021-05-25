const CartListing = (props) => {
  const {
    item,
    removeItem,
    handleInput,
    incrementQuantity,
    decrementQuantity,
  } = props;
  const { id, name, price, quantity } = item;

  const imgStyle = { maxHeight: 100, maxWidth: 100 };
  const containerStyle = { display: "flex", justifyContent: 'space-between', alignItems: "center", width: '100%', margin: 5 };
  const inputStyle = { width: 50 }
  const controlStyle = {marginRight: 50}
  return (
    <li style={containerStyle}>
      <img alt={name} src={item.imgSrc} style={imgStyle} />
      <h2 style={{flex: 1}}>{name}</h2>
      <form name={id} onSubmit={(e) => e.preventDefault()} style={controlStyle}>
        <button onClick={decrementQuantity}>-</button>
        <input name="quantity" value={item.quantity} onChange={handleInput} style={inputStyle}/>
        <button onClick={incrementQuantity}>+</button>
        <button onClick={() => removeItem(item)}>Remove</button>
      </form>
      <div style={{ display: 'flex', flexDirection: "column"}}>
        <p>Price: ${price}</p>
        <p>Total: ${price * quantity}</p>
      </div>
    </li>
  );
};

export default CartListing;
