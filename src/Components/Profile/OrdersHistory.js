import { UserConsumer } from "../../UserContext";
import OrderHistory from "./OrderListing";
import { useHistory } from "react-router-dom";

const Orders = (props) => {
  const history = useHistory();
  return (
    <UserConsumer>
      {(user) => {
        (() => {
          if (!user.loggedUser) {
            history.push("/profile/log-in");
          }
        })();
        return (
          <ul>
            {user.loggedUser
              ? user.loggedUser.orders.map((order) => {
                  return <OrderHistory order={order} />;
                })
              : null}
          </ul>
        );
      }}
    </UserConsumer>
  );
};

export default Orders;
