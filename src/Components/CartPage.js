import { Fragment } from "react";
import ItemListing from "./ItemListing";

const CartPage = (props) => {
  const { cart } = props;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart[0] ? (
        <Fragment>
          {props.cart.map((item) => (
            <Fragment>
              <p>${item.price * item.quantity}</p>
              <ItemListing item={item} />
              <p>{item.quantity}</p>
            </Fragment>
          ))}
          <h2>
            Total:${cart.map(item=> item.price*item.quantity).reduce((total, price) => total + price)}.00
          </h2>
        </Fragment>
      ) : (
        <p>Your Cart Is Empty</p>
      )}
    </div>
  );
};

export default CartPage;
