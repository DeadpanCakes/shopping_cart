import heroImg from "../img/homeHero.png";
import { Link } from "react-router-dom";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeHero = () => {
  const containerStyle = {
    backgroundImage: `url(${heroImg})`,
    minHeight: "100vh",
    position: "relative",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "25%",
    left: "10%",
    alignItems: "end",
    backgroundColor: "aliceblue",
    color: "#2a2b2a",
    padding: "20px 45px",
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1>Houseplant Hero</h1>
        <Link to="/shop">
          <button>
            Bring Life Into Your Home
            <FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
