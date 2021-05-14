import { useState } from "react";

const BillingStep = (props) => {
  const { shippingInfo, billingInfo, setBillingInfo } = props;
  const { name, country, address, zip, city, phone } = billingInfo;
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
  const [checkedAsSame, setCheckedAsSame] = useState(false);

  const handleCheck = () => {
    if (checkedAsSame) {
      setBillingInfo({
        name: "",
        country: "",
        address: "",
        zip: "",
        city: "",
        phone: "",
      });
      setCheckedAsSame((prevState) => !prevState);
    } else {
      setBillingInfo(shippingInfo);
      setCheckedAsSame((prevState) => !prevState);
    }
  };

  return (
    <>
      <h1>Billing Info</h1>
      <label>
        <input type="checkbox" onChange={handleCheck}></input>Same As Shipping?
      </label>
      <label>
        Name
        <input
          value={name}
          onChange={(e) => handleInput(e, setBillingInfo, "name")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Country*
        <input
          value={country}
          onChange={(e) => handleInput(e, setBillingInfo, "country")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Address*
        <textarea
          value={address}
          onChange={(e) => handleInput(e, setBillingInfo, "address")}
          style={inputStyle}
        ></textarea>
      </label>
      <label>
        ZIP/Postal
        <input
          value={zip}
          onChange={(e) => handleInput(e, setBillingInfo, "zip")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        City
        <input
          value={city}
          onChange={(e) => handleInput(e, setBillingInfo, "city")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Phone Number
        <input
          value={phone}
          onChange={(e) => handleInput(e, setBillingInfo, "phone")}
          style={inputStyle}
        ></input>
      </label>
    </>
  );
};

export default BillingStep;
