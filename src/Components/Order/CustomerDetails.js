import { format } from "date-fns";

const CustomerDetails = (props) => {
  const { shipping, billing, payment, time, email } = props;

  const sectionStyle = {
    maxWidth: "30%",
    minWidth: "30%",
    padding: 10,
    margin: 50,
    overflowX: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const breakStyle = {
    width: "95%",
    color: "gray",
  };

  const containerStyle = {
    border: "1px gray solid",
    borderRadius: "5px",
    marginBottom: '50px'
  };

  const addressStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2>Customer Info</h2>
        <p>{email}</p>
      </div>
      <hr style={breakStyle}></hr>
      <div style={{ display: "flex" }}>
        <div style={sectionStyle}>
          <h2>Shipping Address</h2>
          <p>{shipping.name}</p>
          <div style={addressStyle}>
            <p>{shipping.address}</p>
            <p style={addressStyle}>
              {shipping.city}, {shipping.zip}
            </p>
            <p style={addressStyle}>{shipping.country}</p>
          </div>
        </div>
        <div style={sectionStyle}>
          <h2>Billing Address</h2>
          <p>{billing.name}</p>
          <div style={addressStyle}>
            <p>{billing.address}</p>
            <p style={addressStyle}>
              {billing.city}, {shipping.zip}
            </p>
            <p style={addressStyle}>{billing.country}</p>
          </div>
        </div>
      </div>
      <hr style={breakStyle}></hr>
      <div style={{ display: "flex" }}>
        <div style={sectionStyle}>
          <h2>Shipping Method</h2>
          <p>First Class Package</p>
          <p style={{ marginLeft: 10 }}>
            Estimated Delivery Date: {format(new Date(time), "MMMM do, y")}
          </p>
        </div>
        <div style={sectionStyle}>
          <h2>Payment Method</h2>
          <p>Card: {'***' + (payment.cardNumber.toString()).slice(-4)}</p>
          <p>Name On Card: {payment.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
