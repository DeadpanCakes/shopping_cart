import { Link } from "react-router-dom";
import { CartConsumer } from "../../CartContext";
import RecommendedSection from "../RecommendedSection";
import CartListing from "./CartListing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => (
  <CartConsumer>
    {(cart) => {
      const { items, setItems, removeItem, userComment, setComment } = cart; 

      const handleCommentInput = (e) => {
        setComment(e.target.value)
      }

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
          <div style={{width:'100%', backgroundColor: "#f6c7c7"}}>
          <h1
            style={{
              color: "white",
              padding: "10px 0",
              paddingLeft: 30
            }}
          >
            Shopping Cart
          </h1></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60vw",
              marginLeft: "20vw",
            }}
          >
            <div style={{ display: "flex" }}>
              <h2 style={{marginLeft: 20}}>Name</h2>
              <h2 style={{ marginLeft: "auto", marginRight: 150 }}>Count</h2>
              <h2 style={{marginRight: 50}}>Price</h2>
            </div>
            {items.length > 0 ? (
              <>
                <ul style={{borderTop: '2px solid #cbbeb5 ', padding: '10px', marginBottom: '50px', minHeight: '50vh'}} class="cartItems">
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
                  style={{ display: "flex", justifyContent: "space-between",borderTop: '2px solid #cbbeb5 ', paddingTop: 20, marginBottom: '50px' }}
                >
                  <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <label><h2>Notes</h2></label>
                    <textarea
                      placeholder="Feel free to leave any notes you feel are relevant to your order and we will do our best to accomodate!"
                      style={{ width: 500, height: 100, resize: 'vertical'}}
                      value={userComment}
                      onChange={handleCommentInput}
                    ></textarea>
                    <Link
                      to="/contact"
                      style={{ width: 500 }}
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
