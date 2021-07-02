const OrderImgPreview = (props) => {
  const { items } = props;
  const containerStyle = {
    position: "relative",
    minWidth: 200,
    minHeight: 200,
  };
  const imgStyle = {
    position: "absolute",
    maxHeight: 150,
    maxWidth: 150,
    zIndex: 1,
  };
  const img2Style = {
    margin: "10px 0 0 10px",
    zIndex: 0,
  };
  const img3Style = {
    margin: "20px 0 0 20px",
    zIndex: -1,
  };
  return (
    <div style={containerStyle}>
      <img
        src={items[0].imgSrc}
        alt={`A(n) ${items[0].name}`}
        style={imgStyle}
      ></img>
      {items[1] ? (
        <img
          src={items[1].imgSrc}
          alt={`A(n) ${items[1].name}`}
          style={{ ...imgStyle, ...img2Style }}
        ></img>
      ) : null}
      {items[2] ? (
        <img
          src={items[2].imgSrc}
          alt={`A(n) ${items[2].name}`}
          style={{ ...imgStyle, ...img3Style }}
        ></img>
      ) : null}
    </div>
  );
};

export default OrderImgPreview;
