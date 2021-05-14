const ShippingStep = (props) => {
  const { shippingInfo, setShippingInfo } = props;
  const { name, country, address, zip, city, phone } = shippingInfo;
  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  const inputStyle = {
    margin: 10,
  };
  return (
    <>
      <h1>Shipping Info</h1>
      <label>
        Name
        <input
          value={name}
          onChange={(e) => handleInput(e, setShippingInfo, "name")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Country*
        <input
          value={country}
          onChange={(e) => handleInput(e, setShippingInfo, "country")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Address*
        <textarea
          value={address}
          onChange={(e) => handleInput(e, setShippingInfo, "address")}
          style={inputStyle}
        ></textarea>
      </label>
      <label>
        ZIP/Postal
        <input
          value={zip}
          onChange={(e) => handleInput(e, setShippingInfo, "zip")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        City
        <input
          value={city}
          onChange={(e) => handleInput(e, setShippingInfo, "city")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Phone Number
        <input
          value={phone}
          onChange={(e) => handleInput(e, setShippingInfo, "phone")}
          style={inputStyle}
        ></input>
      </label>
    </>
  );
};

export default ShippingStep;
