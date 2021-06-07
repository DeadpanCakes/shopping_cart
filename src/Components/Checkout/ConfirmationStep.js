import ConfirmationInfo from "./ConfirmationInfo";

const ConfirmationStep = (props) => {
  const { signUpInfo, shippingInfo, billingInfo, paymentInfo } = props;
  const { email } = signUpInfo;
  const { cardNumber, name, expire } = paymentInfo;

  const hideCard = () => {
    const lastFour = cardNumber.toString().slice(-4);
    const hideNumber = (num) => {
      if (num.length >= cardNumber.length) {
        return num;
      }
      return hideNumber("*".concat(num));
    };
    return hideNumber(lastFour);
  };

  const headerStyle = {
    marginTop: 10,
    fontSize: "3em",
    width: 260,
    height: 100,
  };
  const sectionStyle = { margin: 20, overflowX: "auto" };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={sectionStyle}>
          <h2 style={headerStyle}>Account Info</h2>
          <ConfirmationInfo category="Email" content={email} />
        </div>
        <div style={sectionStyle}>
          <h2 style={headerStyle}>Payment Info</h2>
          <ConfirmationInfo category="Card" content={hideCard()} />
          <ConfirmationInfo category="Expiration" content={expire} />
          <ConfirmationInfo category="Name On Card" content={name} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={sectionStyle}>
          <h2 style={headerStyle}>Shipping Info</h2>
          {(() => {
            const { name, country, address, zip, city, phone } = shippingInfo;
            return (
              <>
                <div style={{ display: "flex" }}>
                  <ConfirmationInfo category="Name" content={name} />
                  <ConfirmationInfo category="Phone" content={phone} />
                </div>
                <div style={{ display: "flex" }}>
                  <ConfirmationInfo category="Address" content={address} />
                  <ConfirmationInfo category="ZIP/Postal" content={zip} />
                </div>
                <div style={{ display: "flex" }}>
                  <ConfirmationInfo category="City" content={city} />
                  <ConfirmationInfo category="Country" content={country} />
                </div>
              </>
            );
          })()}
        </div>
        <div style={sectionStyle}>
          <h2 style={headerStyle}>Billing Info</h2>
          {(() => {
            const { name, country, address, zip, city, phone } = billingInfo;
            return (
              <>
                <div style={{ display: "flex" }}>
                  <ConfirmationInfo category="Name" content={name} />
                  <ConfirmationInfo category="Phone" content={phone} />
                </div>
                <div style={{ display: "flex" }}>
                  <ConfirmationInfo category="Address" content={address} />
                  <ConfirmationInfo category="ZIP/Postal" content={zip} />
                </div>
                <div style={{ display: "flex" }}>
                  <ConfirmationInfo category="City" content={city} />
                  <ConfirmationInfo category="Country" content={country} />
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
