import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EmptyWishlist = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
  };
  const btnStyle = {
    margin: 40,
  };
  return (
    <div style={containerStyle}>
      <h1>Your Wishlist Is Empty</h1>
      <Link to="/shop" style={btnStyle}>
        <button>
          Find Your Next 10 Wishlist Plants{" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
