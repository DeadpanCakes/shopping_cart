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
            ? "itemListBtn expandedItemListBtn"
            : "itemListBtn collapsedItemListBtn"
        }
        onClick={toggleExpand}
      >
        Show Order Details
      </button>
      <ul
        className={
          isExpanded
            ? "itemList expandedItemList"
            : "itemList collapsedItemList"
        }
      >
        {items.map((item) => {
          return <ItemListingSm key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default OrderItems;
