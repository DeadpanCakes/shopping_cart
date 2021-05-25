import { Link } from "react-router-dom";
import { CartConsumer } from "../../CartContext";
import RecommendedSection from "../RecommendedSection";
import CartListing from "./CartListing";

const CartPage = () => (
  <CartConsumer>
    {(cart) => {
      const { items, setItems, removeItem } = cart;

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

      return (
        <div>
          <h1>Shopping Cart</h1>
          {items.length > 0 ? (
            <div>
              <ul>
                {items.map((item) => (
                  <CartListing
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    handleInput={handleInput}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                  />
                ))}
              </ul>
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
              <RecommendedSection itemArr={items} />
            </div>
          ) : (
            <>
              <p>Your Cart Is Empty</p>
              <RecommendedSection itemArr={items} />
            </>
          )}
        </div>
      );
    }}
  </CartConsumer>
);

export default CartPage;
