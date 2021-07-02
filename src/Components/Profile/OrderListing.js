import { format } from "date-fns";
import { Link } from "react-router-dom";
import OrderImgPreview from "./OrderImgPreview";

const OrderListing = (props) => {
  const { order } = props;
  console.log(order);
  const formattedDate = format(new Date(order.time), "MMMM do, y");

  const listingStyle = {
    display: "flex",
  };
  return (
    <li style={listingStyle}>
      <OrderImgPreview items={order.items} />
      <Link to={`/shop/orders/${order.id}`}>
        <button onClick={() => console.log(order)}>{formattedDate}</button>
      </Link>
    </li>
  );
};

export default OrderListing;
