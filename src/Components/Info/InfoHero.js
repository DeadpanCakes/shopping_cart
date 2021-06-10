const InfoHero = (props) => {
  const { img, text } = props;

  const heroStyle = {
    width: "100%",
    height: "30vh",
    position: "relative",
    backgroundImage: `url(${img})`,
  };

  const heroText = {
    position: "absolute",
    left: "6%",
    bottom: "8%",
    color: "aliceblue",
    textShadow: '0 0 5px #2a2b2a',
  };

  return (
    <div style={heroStyle}>
      <div style={heroText}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default InfoHero;
