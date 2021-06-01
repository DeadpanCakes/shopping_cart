import CheckoutForm from "./CheckoutForm";
import CheckoutListing from "./CheckoutListing";
import { CartConsumer } from "../../CartContext";
import CheckoutPlaceholder from './CheckoutPlaceholder';
import CommentBox from './CommentBox';

const CheckoutPage = (props) => {
  const {addOrder} = props;
  return (
    <CartConsumer>
      {(cart) => {
        const { items, emptyCart, userComment } = cart;

        const getSubTotal = () => {
          const priceArr = items.map((item) => item.price * item.quantity);
          return priceArr.reduce((total, item) => total + item);
        };

        const getTax = () => getSubTotal() * 0.08;

        const getShipping = () => {
          //Shipping cost $5 to start, plus $0.50 for each item after the first; free shipping for orders over 30 dollars before taxes
          if (getSubTotal() < 30) {
            const quantityArr = items.map((item) => item.quantity);
            const itemCount = quantityArr.reduce(
              (total, count) => total + count
            );
            return itemCount * 0.5 + 4.5;
          }
          return 0;
        };
        const getTotalCost = () => {
          return getSubTotal() + getTax() + getShipping();
        };
        const formatter = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        const ulStyle = {
            width: '100%',
            height: 500,
            overflowY: cart.items.length <= 5 ? 'visible' : 'scroll'
        }

        return cart.items.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "center",
              minHeight: "85vh",
              maxWidth: "60vw",
              marginLeft: '20vw',
              marginTop: "10px",
              padding: '0 100px',
              backgroundColor: '#ffffff50'
            }}
          >
            <CheckoutForm emptyCart={emptyCart} items={items} addOrder={addOrder} />
            <aside style={{ flexShrink: 1, maxWidth: "50%", marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop:50}}>
              <ul style={ulStyle}>
                {cart.items.map((item) => {
                  return <CheckoutListing key={item.id} item={item} />;
                })}
              </ul>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "50%",
                }}
              >
                <CommentBox comments={userComment} />
                <h3 style={{ padding: "2px 0" }}>
                  Subtotal: {formatter.format(getSubTotal())}
                </h3>
                <h3 style={{ padding: "2px 0" }}>
                  Taxes: {formatter.format(getTax())}
                </h3>
                <h3 style={{ padding: "2px 0" }}>
                  Shipping: {formatter.format(getShipping())}
                </h3>
              </div>
              <h1>Total: {formatter.format(getTotalCost())}</h1>
            </aside>
          </div>
        ) : <CheckoutPlaceholder />;
      }}
    </CartConsumer>
  );
};

export default CheckoutPage;
