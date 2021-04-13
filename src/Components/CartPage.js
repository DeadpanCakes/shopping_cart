import { Fragment } from "react";
import { Link } from "react-router-dom";
import ItemListing from "./ItemListing";
import { CartConsumer } from "../CartContext";

const CartPage = (props) => (
    <CartConsumer>
      {(cart) => {
        const { items, setItems, removeItem } = cart

        const handleInput = (e) => {
          const target = e.target.parentElement;
          if (!isNaN(target.quantity.value)) {
            if (target.quantity.value > 20) {
              changeOrderQuantity(target, 20);
            } else if (target.quantity.value > 1) {
              changeOrderQuantity(target, target.quantity.value);
            }
          }
        };
      
        const incrementQuantity = (e) => {
          const target = e.target.parentElement;
          if (target.quantity.value < 20) {
            changeOrderQuantity(target, Number(target.quantity.value) + 1);
          }
        };
        const decrementQuantity = (e) => {
          const target = e.target.parentElement;
          if (target.quantity.value > 1) {
            changeOrderQuantity(target, Number(target.quantity.value) - 1);
          }
        };
      
        const changeOrderQuantity = (target, newQuantity) => {
          const updatedCart = items.map((item) =>
            target.name === item.id ? { ...item, quantity: newQuantity } : item
          );
          setItems(updatedCart);
        };
        
        return <div>
          <h1>Shopping Cart</h1>
          {items[0] ? (
            <Fragment>
              {items.map((item) => (
                <div key={item.id}>
                  <p>${item.price * item.quantity}</p>
                  <ItemListing item={item} />
                  <form name={item.id} onSubmit={(e) => e.preventDefault()}>
                    <button onClick={decrementQuantity}>-</button>
                    <input
                      name="quantity"
                      value={item.quantity}
                      onChange={handleInput}
                    />
                    <button onClick={incrementQuantity}>+</button>
                    <button onClick={() => removeItem(item)}>Remove</button>
                  </form>
                </div>
              ))}
              <h2>
                Total:$
                {items
                  .map((item) => item.price * item.quantity)
                  .reduce((total, price) => total + price)}
                .00
              </h2>
              <Link to="/cart/checkout">
                <button>Check Out</button>
              </Link>
            </Fragment>
          ) : (
            <p>Your Cart Is Empty</p>
          )}
        </div>}
      }
    </CartConsumer>
  );

export default CartPage;
