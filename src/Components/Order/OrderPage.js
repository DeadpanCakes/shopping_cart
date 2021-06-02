import ItemListingSm from "../ItemListingSm";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { format } from "date-fns";

const OrderPage = (props) => {
  const { id } = props.match.params;
  const { orders } = props;
  const [order, setOrder] = useState({});

  const { items, time, shipping, billing, payment, price, comment } = order;
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
    }
  }, [orders, id, time]);

  const pageStyle = {
    minHeight: "100vh",
  };

  return order.time ? (
    <div style={pageStyle}>
      <div id="orderContainer">
        <div>
          <h2>Order #{id}</h2>
          <h2>{price.total}</h2>
        </div>
        <div>
          <h2>{formattedTime}</h2>
        </div>
        <ul>
          {items.map((item) => (
            <ItemListingSm key={item.id} item={item} />
          ))}
        </ul>
        <div>
          <p>{billing.address}</p>
          <p>{billing.city}</p>
          <p>{billing.country}</p>
          <p>{billing.name}</p>
          <p>{billing.phone}</p>
          <p>{billing.zip}</p>
        </div>
        <div>
          <p>{shipping.address}</p>
          <p>{shipping.city}</p>
          <p>{shipping.country}</p>
          <p>{shipping.name}</p>
          <p>{shipping.phone}</p>
          <p>{shipping.zip}</p>
        </div>
        <div>
          <p>{payment.cardNumber.toString()}</p>
          <p>{payment.code.toString()}</p>
          <p>{payment.expire.toString()}</p>
          <p>{payment.name.toString()}</p>
        </div>
        <div>
          <p>{comment}</p>
        </div>
      </div>
      <button onClick={() => console.log(comment)}>test</button>
    </div>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Link to="/shop/orders">go</Link>
    </div>
  );
};

export default withRouter(OrderPage);
