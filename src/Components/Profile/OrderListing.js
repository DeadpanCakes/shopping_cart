import { format } from "date-fns";
import { Link } from "react-router-dom";
import OrderImgPreview from "./OrderImgPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const OrderListing = (props) => {
  const { order } = props;
  console.log(order);
  const formattedDate = format(new Date(order.time), "MMMM do, y");

  const listingStyle = {
    display: "flex",
    margin: 20,
  };

  return (
    <li style={listingStyle}>
      <OrderImgPreview items={order.items} />
      <div>
        <p>order#{order.id}</p>
        <h1>{formattedDate}</h1>
      </div>
      <h2 style={{ marginLeft: "auto" }}>{order.price.total}</h2>
      <Link
        to={`/shop/orders/${order.id}`}
        style={{ alignSelf: "flex-end", marginBottom: 30 }}
      >
        <button onClick={() => console.log(order)}>
          See Details {" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Link>
    </li>
  );
};

export default OrderListing;
