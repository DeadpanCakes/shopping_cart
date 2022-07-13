const CheckoutListing = (props) => {
  const { item } = props;

  return (
    <li
      style={{
        display: "flex",
        height: "70px",
        maxWidth: "80%",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          maxHeight: "70px",
          maxWidth: 70,
        }}
      >
        <img
          src={item.imgSrc}
          alt={`A(n) ${item.name}`}
          style={{ borderRadius: "5px" }}
        ></img>
        <h3
          style={{
            position: "absolute",
            right: "-10%",
            top: "-10%",
            backgroundColor: "pink",
            padding: "3px 6px",
            borderRadius: 100,
          }}
        >
          {item.quantity}
        </h3>
      </div>
      <h3 style={{ alignSelf: "center", marginLeft: "10px" }}>{item.name}</h3>
      <h2
        style={{ fontSize: "2.5em", alignSelf: "flex-end", marginLeft: "auto" }}
      >{`$${item.quantity * item.price}`}</h2>
    </li>
  );
};

export default CheckoutListing;
