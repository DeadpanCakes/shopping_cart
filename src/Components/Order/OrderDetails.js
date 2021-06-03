import ItemListingSm from "../ItemListingSm";
import { useState } from "react";

const OrderItems = (props) => {
  const { items } = props;
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prevState) => !prevState);

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
        Show Order Details
      </button>
      <ul
        className={
          isExpanded
            ? "orderDetail expandedOrderDetail"
            : "orderDetail collapsedOrderDetail"
        }
        style={isExpanded ? {maxHeight: 500} : {maxHeight: 0}}
      >
        {items.map((item) => {
          return <ItemListingSm key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default OrderItems;
