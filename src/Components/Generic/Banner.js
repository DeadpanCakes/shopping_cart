const Banner = (props) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: '10vh',
    backgroundColor: "pink",
  };
  const textStyle = {
    position: "absolute",
    bottom: "5%",
    left: "3%",
    color: "aliceblue",
  };
  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{props.text}</h1>
    </div>
  );
};

export default Banner;
