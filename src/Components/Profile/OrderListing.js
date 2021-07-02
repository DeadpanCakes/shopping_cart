import { format } from "date-fns";
import { Link } from "react-router-dom";

const OrderListing = (props) => {
  const { order } = props;
  console.log(order);
  const formattedDate = format(new Date(order.time), "MMMM do, y");
  return (
    <li>
      <Link to={`/shop/orders/${order.id}`}>
        <button onClick={() => console.log(order)}>{formattedDate}</button>
      </Link>
    </li>
  );
};

export default OrderListing;
