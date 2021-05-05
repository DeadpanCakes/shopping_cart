import { useState, useEffect } from "react";
import startFrame from "../img/loadingPlant1.png";
import midFrame from "../img/loadingPlant2.png";
import endFrame from "../img/loadingPlant3.png";

const Loader = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const incrementFrame = () => {
    setCurrentFrame((prevFrame) => {
      if (prevFrame >= 3) {
        return 1;
      }
      return prevFrame + 1;
    });
  };

  const frames = [startFrame, midFrame, endFrame];

  useEffect(() => {
    const animation = setInterval(incrementFrame, 500);

    return () => clearInterval(animation);
  }, []);

  const containerStyle = {
      height: '100%',
      width: '100%',
  }

  const imgStyle = {
      height: 50,
      width: 50,
  }

  return (
    <div style={containerStyle}>
      <img
        src={frames[currentFrame - 1]}
        alt="A growing cartoon plant"
        id="loader"
        style={imgStyle}
      ></img>
    </div>
  );
};

export default Loader;
