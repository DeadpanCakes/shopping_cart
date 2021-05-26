import { Link } from "react-router-dom";
import { CartConsumer } from "../../CartContext";
import RecommendedSection from "../RecommendedSection";
import CartListing from "./CartListing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <h1
            style={{
              width: "100vw",
              color: "white",
              backgroundColor: "#f6c7c7",
              padding: "10px 0",
              paddingLeft: "30px",
            }}
          >
            Shopping Cart
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60vw",
              marginLeft: "20vw",
            }}
          >
            <div style={{ display: "flex" }}>
              <h2>Name</h2>
              <h2 style={{ marginLeft: "auto", marginRight: 100 }}>Count</h2>
              <h2>Price</h2>
            </div>
            {items.length > 0 ? (
              <>
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Notes</label>
                    <textarea
                      placeholder="Feel free to leave any notes you feel are relevant to your order and we will do our best to accomodate!"
                      style={{ width: 200, height: 100, resize: 'vertical'}}
                    ></textarea>
                    <Link
                      to="/contact"
                      style={{ width: 200, fontSize: ".9em" }}
                      id="cartComment"
                    >
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Have
                      a queston you need answered before committing to an order?
                      Send us a message!
                    </Link>
                  </div>
                  <div>
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
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Your Cart Is Empty</p>
              </>
            )}
          </div>
          <div style={{ width: "80vw", marginLeft: "10vw" }}>
            <RecommendedSection itemArr={items} />
          </div>
        </div>
      );
    }}
  </CartConsumer>
);

export default CartPage;
