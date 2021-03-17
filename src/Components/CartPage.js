import { Fragment } from "react";
import ItemListing from "./ItemListing";

const CartPage = (props) => {
  const { cart, removeFromCart } = props;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart[0] ? (
        <Fragment>
          {props.cart.map((item) => (
            <div>
              <p>${item.price * item.quantity}</p>
              <ItemListing item={item} />
              <form onSubmit={(e)=>e.preventDefault()}>
              <input value={item.quantity} />
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
