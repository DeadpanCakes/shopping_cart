import ItemListingSm from "../ItemListingSm";
import { useState } from "react";

const OrderItems = (props) => {
  const { items, price, comment } = props;
  const { subtotal, tax, shipping, total } = price;
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prevState) => !prevState);

  const calculationContainer = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={{ border: "1px rgb(80, 76, 76) solid", borderRadius: "5px" }}>
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
        <ul style={{overflowY: 'auto'}}>
          {items.map((item) => {
            return <ItemListingSm key={item.id} item={item} />;
          })}
        </ul>
        <hr style={{ borderTop: "1px rgb(80, 76, 76) solid", width: "95%" }} />
        <div style={{display:'flex', justifyContent: 'space-between'}}>
          <div style={{overflow: 'auto', marginLeft: 10}}>
            {comment.length > 0 ? <h2>Customer Comment</h2> : null}
            <p style={{marginLeft: 10}}>{comment}</p>
            </div>
          <div
            style={{
              width: "10vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              margin: 20,
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
            <div
              style={{
                ...calculationContainer,
                borderBottom: "rgb(80, 76, 76) 1px solid",
              }}
            >
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
    </div>
  );
};

export default OrderItems;
