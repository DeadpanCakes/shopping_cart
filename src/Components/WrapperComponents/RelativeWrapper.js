const RelativeWrapper = (props) => {
  const {newStyle} = props;
  return <div style={{ position: "relative", ...newStyle }}>{props.children}</div>;
};

export default RelativeWrapper;
