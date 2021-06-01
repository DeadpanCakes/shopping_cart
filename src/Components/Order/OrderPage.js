import CheckoutListing from "../Checkout/CheckoutListing";
import useOrders from '../../useOrders';
import {useEffect, useState} from "react";

const OrderPage = (props) => {
  const { id } = props.match.params;
  const [order, setOrder] = useState({});

  const { items, time, shipping, billing, payment } = order;
  
  const {orders} = useOrders();

    console.log('oci:',orders)

  useEffect(() => {
      const fetchOrder = (targetId) => {
          return orders.find((order) => {
              return order.id === targetId
          })
      }
      setOrder(fetchOrder(id))
  }, [orders, id])

  return order.time ? (
    <div>
      <p>{time.toString()}</p>
      <p>{id.toString()}</p>
      <ul>
        {items.map((item) => (
          <CheckoutListing item={item} />
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
    </div>
  ): <div style={{height: '100vh', width: '100vw'}}></div>;
};

export default OrderPage;
