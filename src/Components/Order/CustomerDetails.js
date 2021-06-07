const CustomerDetails = (props) => {
  const { shipping, billing, payment } = props;
  return (
    <div>
      <h2>Customer Info</h2>
      <p>email</p>
      <div>
        <div>
          <h2>Shipping Address</h2>
          <p>{shipping.name}</p>
          <p>{shipping.address}</p>
          <p>
            {shipping.city} {shipping.zip}
          </p>
          <p>{shipping.country}</p>
        </div>
        <div>
          <h2>Billing Address</h2>
          <p>{billing.name}</p>
          <p>{billing.address}</p>
          <p>
            {billing.city} {shipping.zip}
          </p>
          <p>{billing.country}</p>
        </div>
      </div>
      <div>
        <div>
          <h2>Shipping Method</h2>
          <p>First Class Package</p>
          <p>Estimated Delivery Date:</p>
        </div>
        <div>
          <h2>Payment Method</h2>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
