import { UserConsumer } from "../../UserContext";
import OrderHistory from "./OrderListing";
import { useHistory } from "react-router-dom";
import Banner from "../Generic/Banner";

const Orders = (props) => {
  const history = useHistory();

  const pageStyle = {
    minHeight: '100vh'
  }
  return (
    <UserConsumer>
      {(user) => {
        (() => {
          if (!user.loggedUser) {
            history.push("/profile/log-in");
          }
        })();
        return (
          <div style={pageStyle}>
            <Banner text="Order History" />
            <ul>
              {user.loggedUser
                ? user.loggedUser.orders.map((order) => {
                    return <OrderHistory order={order} />;
                  })
                : null}
            </ul>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default Orders;
