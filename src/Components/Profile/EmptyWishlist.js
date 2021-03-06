import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import sadPlant from "../../img/sadPlant.png";

const EmptyWishlist = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const btnStyle = {
    margin: 40,
  };
  const imgStyle = {
    maxHeight: 500,
  };
  return (
    <div style={containerStyle}>
      <img src={sadPlant} alt="A Sad Plant" style={imgStyle} />
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
