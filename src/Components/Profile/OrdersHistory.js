import { UserConsumer } from "../../UserContext";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Orders = (props) => {
  return (
    <UserConsumer>
      {(user) => {
        return (
          <ul>
            {user.loggedUser
              ? user.loggedUser.orders.map((order) => {
                const formattedDate = format(new Date(order.time), "MMMM do, y")
                  return (
                    <li key={order.id}>
                      <Link to={`/shop/orders/${order.id}`}>
                        <button onClick={() => console.log(order)}>
                          {formattedDate}
                        </button>
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        );
      }}
    </UserConsumer>
  );
};

export default Orders;
