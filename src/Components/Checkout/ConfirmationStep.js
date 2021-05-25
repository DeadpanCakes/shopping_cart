import ConfirmationInfo from "./ConfirmationInfo";

const ConfirmationStep = (props) => {
  const { signUpInfo, shippingInfo, billingInfo, paymentInfo } = props;
  const { email } = signUpInfo;
  const { cardNumber, name, expire } = paymentInfo;

  const headerStyle = { marginTop: 10 };

  return (
    <div>
      <h1 style={headerStyle}>Account Info</h1>
      <ConfirmationInfo category='Email' content={email} />
      <h1 style={headerStyle}>Shipping Info</h1>
      {(() => {
        const { name, country, address, zip, city, phone } = shippingInfo;
        return (
          <>
            <div style={{ display: "flex" }}>
              <ConfirmationInfo category="Name" content={name} />
              <ConfirmationInfo category="Phone" content={phone} />
            </div>
            <div style={{ display: "flex" }}>
              <ConfirmationInfo category="Country" content={country} />
              <ConfirmationInfo category="Address" content={address} />
              <ConfirmationInfo category="ZIP/Postal" content={zip} />
              <ConfirmationInfo category="City" content={city} />
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
              <ConfirmationInfo category="Name" content={name} />
              <ConfirmationInfo category="Phone" content={phone} />
            </div>
            <div style={{ display: "flex" }}>
              <ConfirmationInfo category="Country" content={country} />
              <ConfirmationInfo category="Address" content={address} />
              <ConfirmationInfo category="ZIP/Postal" content={zip} />
              <ConfirmationInfo category="City" content={city} />
            </div>
          </>
        );
      })()}
      <h1 style={headerStyle}>Payment Info</h1>
      <ConfirmationInfo category="Card" content={cardNumber} />
      <ConfirmationInfo category="Expiration" content={expire} />
      <ConfirmationInfo category="Name On Card" content={name} />
    </div>
  );
};

export default ConfirmationStep;
