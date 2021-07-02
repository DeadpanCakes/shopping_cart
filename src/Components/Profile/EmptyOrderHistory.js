import { Link } from "react-router-dom";
import sadPlant from "../../img/sadPlant.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EmptyOrderHistory = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const imgStyle = {
    maxHeight: 500,
  };
  return (
    <div style={containerStyle}>
      <img src={sadPlant} alt="A Sad Plant" style={imgStyle} />
      <h1>You've Not Ordered Any Plants Yet</h1>
      <Link to="/shop">
        <button>
          Let's Fix That Problem <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Link>
    </div>
  );
};

export default EmptyOrderHistory;
