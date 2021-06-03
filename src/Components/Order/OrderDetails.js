import ItemListingSm from "../ItemListingSm";
import { useState } from "react";

const OrderItems = (props) => {
  const { items, price } = props;
  const { subtotal, tax, shipping, total } = price;
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prevState) => !prevState);

  const calculationContainer = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div>
      <button
        className={
          isExpanded
            ? "orderDetailBtn expandedOrderDetailBtn"
            : "orderDetailBtn collapsedOrderDetailBtn"
        }
        onClick={toggleExpand}
      >
        {isExpanded ? "Hide" : "Show"} Order Details
      </button>
      <div
        className={
          isExpanded
            ? "orderDetail expandedOrderDetail"
            : "orderDetail collapsedOrderDetail"
        }
        style={isExpanded ? { maxHeight: 500 } : { maxHeight: 0 }}
      >
        <ul>
          {items.map((item) => {
            return <ItemListingSm key={item.id} item={item} />;
          })}
        </ul>
        <div
          style={{
            width: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            alignSelf:'flex-end'
          }}
        >
          <div style={calculationContainer}>
            <p>Subtotal</p>
            <p>{subtotal}</p>
          </div>
          <div style={calculationContainer}>
            <p>Tax</p>
            <p>{tax}</p>
          </div>
          <div style={{...calculationContainer, borderBottom: "black 1px solid" }}>
            <p>Shipping</p>
            <p>{shipping}</p>
          </div>
          <div style={calculationContainer}>
            <h2>Total</h2>
            <h2>{total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
