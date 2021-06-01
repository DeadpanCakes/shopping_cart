import { Link } from "react-router-dom";

const Order = (props) => {
  const { orderId } = props;
  return <Link to={`/shop/orders/${orderId}`}>{orderId}</Link>;
};
const Orders = (props) => {
  const { ordersArr } = props;
  return ordersArr.length > 0 ? (
    <>
      <ul>
        {ordersArr.map((order) => (
          <Order key={order.id} orderId={order.id} />
        ))}
      </ul>
      <button onClick={props.logOrders}>Check Orders</button>
    </>
  ) : <h1>empty</h1>;
};

export default Orders;