import OrderDetails from "./OrderDetails";
import CustomerDetails from "./CustomerDetails";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { format } from "date-fns";

const OrderPage = (props) => {
  const { id } = props.match.params;
  const { orders } = props;
  const [order, setOrder] = useState({});

  const { items, time, shipping, billing, payment, price, comment, email } = order;
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const fetchOrder = (targetId) => {
      return orders.find((order) => {
        return order.id === targetId;
      });
    };
    setOrder(fetchOrder(id));
    if (time) {
      setFormattedTime(format(new Date(time), "MMMM do, y 'at' pp"));
      console.log(time)
    }
  }, [orders, id, time]);

  const pageStyle = {
    minHeight: "100vh",
  };

  return order.time ? (
    <div style={pageStyle}>
      <div id="orderContainer">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2>Order ID: {id}</h2>
          <h2>{price.total}</h2>
        </div>
        <div style={{marginLeft: 20}}>
          <h2>{formattedTime}</h2>
        </div>
        <OrderDetails items={items} price={price} comment={comment} />
        <CustomerDetails
          shipping={shipping}
          billing={billing}
          payment={payment}
          time={time}
          email={email}
        />
      </div>
    </div>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Link to="/shop/orders">go</Link>
    </div>
  );
};

export default withRouter(OrderPage);
