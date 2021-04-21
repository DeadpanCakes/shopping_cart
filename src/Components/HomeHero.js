import heroImg from "../img/homeHero.png";
import { Link } from "react-router-dom";

const HomeHero = () => {
  const containerStyle = {
    backgroundImage: `url(${heroImg})`,
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <h1>Houseplant Hero</h1>
      <Link to="/shop">
        <button>Bring Life Into Your Home</button>
      </Link>
    </div>
  );
};

export default HomeHero;
