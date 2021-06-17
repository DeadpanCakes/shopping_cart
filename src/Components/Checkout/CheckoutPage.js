import CheckoutForm from "./CheckoutForm";
import ItemListingSm from "../ItemListingSm";
import { CartConsumer } from "../../CartContext";
import CheckoutPlaceholder from "./CheckoutPlaceholder";
import CommentBox from "./CommentBox";
import { UserConsumer } from "../../UserContext";
import useCurrency from '../../useCurrency';

const CheckoutPage = (props) => {
  const { addOrder } = props;
  const {getSubTotal, getShipping, getTax, getTotalCost, formatter} = useCurrency();
  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser } = user;
        return (
          <CartConsumer>
            {(cart) => {
              const { items, emptyCart, userComment } = cart;

              const ulStyle = {
                width: "100%",
                height: 500,
                overflowY: cart.items.length <= 5 ? "visible" : "scroll",
              };

              return cart.items.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                    justifyContent: "center",
                    minHeight: "85vh",
                    maxWidth: "60vw",
                    marginLeft: "20vw",
                    marginTop: "10px",
                    padding: "0 100px",
                    backgroundColor: "#ffffff50",
                  }}
                >
                  <CheckoutForm
                    user={loggedUser}
                    emptyCart={emptyCart}
                    items={items}
                    addOrder={addOrder}
                    transactionInfo={{
                      subtotal: formatter.format(getSubTotal(items)),
                      tax: formatter.format(getTax(items)),
                      shipping: formatter.format(getShipping(items)),
                      total: formatter.format(getTotalCost(items)),
                    }}
                    userComment={userComment}
                  />
                  <aside
                    style={{
                      flexShrink: 1,
                      maxWidth: "50%",
                      marginLeft: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      marginTop: 50,
                    }}
                  >
                    <ul style={ulStyle}>
                      {cart.items.map((item) => {
                        return <ItemListingSm key={item.id} item={item} />;
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
                        Subtotal: {formatter.format(getSubTotal(items))}
                      </h3>
                      <h3 style={{ padding: "2px 0" }}>
                        Taxes: {formatter.format(getTax(items))}
                      </h3>
                      <h3 style={{ padding: "2px 0" }}>
                        Shipping: {formatter.format(getShipping(items))}
                      </h3>
                    </div>
                    <h1>Total: {formatter.format(getTotalCost(items))}</h1>
                  </aside>
                </div>
              ) : (
                <CheckoutPlaceholder />
              );
            }}
          </CartConsumer>
        );
      }}
    </UserConsumer>
  );
};

export default CheckoutPage;
