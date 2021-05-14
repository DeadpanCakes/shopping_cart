const ConfirmationStep = (props) => {
  const { signUpInfo, shippingInfo, billingInfo, paymentInfo } = props;
  const { email } = signUpInfo;
  const { cardNumber, name, expire } = paymentInfo;

  const containerStyle = { margin: 15 };
  const headerStyle = { marginTop: 10 };
  const labelStyle = { textDecoration: "underline" };
  const contentStyle = { marginLeft: 10, marginTop: 5 };

  return (
    <div>
      <h1 style={headerStyle}>Account Info</h1>
      <div style={containerStyle}>
        <h2 style={labelStyle}>Email</h2>
        <h3 style={contentStyle}>{email}</h3>
      </div>
      <h1 style={headerStyle}>Shipping Info</h1>
      {(() => {
        const { name, country, address, zip, city, phone } = shippingInfo;
        return (
          <>
            <div style={{ display: "flex" }}>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Name</h2>
                <h3 style={contentStyle}>{name}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Phone</h2>
                <h3 style={contentStyle}>{phone}</h3>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Country</h2>
                <h3 style={contentStyle}>{country}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Street</h2>
                <h3 style={contentStyle}>{address}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>ZIP/Postal</h2>{" "}
                <h3 style={contentStyle}>{zip}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>City</h2>
                <h3 style={contentStyle}>{city}</h3>
              </div>
            </div>
          </>
        );
      })()}
      <h1 style={headerStyle}>Billing Info</h1>
      {(() => {
        const { name, country, address, zip, city, phone } = billingInfo;
        return (
          <>
            <div style={{ display: "flex" }}>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Name</h2>
                <h3 style={contentStyle}>{name}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Phone</h2>
                <h3 style={contentStyle}>{phone}</h3>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Country</h2>{" "}
                <h3 style={contentStyle}>{country}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>Street</h2>
                <h3 style={contentStyle}>{address}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>ZIP/Postal</h2>{" "}
                <h3 style={contentStyle}>{zip}</h3>
              </div>
              <div style={containerStyle}>
                <h2 style={labelStyle}>City</h2>
                <h3 style={contentStyle}>{city}</h3>
              </div>
            </div>
          </>
        );
      })()}
      <h1 style={headerStyle}>Payment Info</h1>
      <div style={containerStyle}>
        <h2 style={labelStyle}>Card</h2>
        <h3 style={contentStyle}>{cardNumber}</h3>
      </div>
      <div style={containerStyle}>
        <h2 style={labelStyle}>Expiration</h2>
        <h3 style={contentStyle}>{expire}</h3>
      </div>
      <div style={containerStyle}>
        <h2 style={labelStyle}>Name On Card</h2>
        <h3 style={contentStyle}>{name}</h3>
      </div>
    </div>
  );
};

export default ConfirmationStep;
