const Hero = (props) => {
  const { img, miscStyle } = props;
  const heroStyle = {
    position: "relative",
    backgroundImage: `url(${img})`,
    minHeight: "25vh",
    width: "100%",
    ...miscStyle,
  };
  return <div style={heroStyle}>{props.children}</div>;
};

export default Hero;
