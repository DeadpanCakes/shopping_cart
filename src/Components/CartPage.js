import { Fragment } from "react";
import ItemListing from "./ItemListing";

const CartPage = (props) => {
  const { cart, setCart, removeFromCart } = props;

  const handleInput = (e) => {
    const target = e.target.parentElement;
    if (target.quantity.value > 10) {
      changeOrderQuantity(target.name, 10);
    } else if (target.quantity.value < 1) {
      changeOrderQuantity(target.name, 1);
    } else {
        changeOrderQuantity(target.name, target.quantity.value);
      }
  };

  const changeOrderQuantity = (target, newQuantity) => {
    const updatedCart = cart.map((item) =>
      target === item.id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart[0] ? (
        <Fragment>
          {cart.map((item) => (
            <div>
              <p>${item.price * item.quantity}</p>
              <ItemListing item={item} />
              <form name={item.id} onSubmit={(e) => e.preventDefault()}>
                <input
                  name="quantity"
                  value={item.quantity}
                  onChange={handleInput}
                />
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </form>
            </div>
          ))}
          <h2>
            Total:$
            {cart
              .map((item) => item.price * item.quantity)
              .reduce((total, price) => total + price)}
            .00
          </h2>
        </Fragment>
      ) : (
        <p>Your Cart Is Empty</p>
      )}
    </div>
  );
};

export default CartPage;
