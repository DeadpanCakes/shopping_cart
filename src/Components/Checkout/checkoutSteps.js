import { useState } from "react";

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

const checkoutSteps = [
  (props) => {
    const { signUpInfo, setSignUpInfo, isGuest, setIsGuest } = props;
    const { email, pass, verifyPass } = signUpInfo;

    const toggleCheck = () => {
      setIsGuest((prevState) => !prevState);
      console.log('phral')
    }

    return (
      <>
        <h1>Sign Up!</h1>
        <label>
          <input type="checkbox" onChange={toggleCheck} defaultChecked={isGuest}></input>Or check out as
          guest
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => {
              handleInput(e, setSignUpInfo, "email");
            }}
            style={inputStyle}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              handleInput(e, setSignUpInfo, "pass");
            }}
            style={inputStyle}
            disabled={isGuest}
          ></input>
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={verifyPass}
            onChange={(e) => handleInput(e, setSignUpInfo, "verifyPass")}
            style={inputStyle}
            disabled={isGuest}
          ></input>
        </label>
      </>
    );
  },

  (props) => {
    const { shippingInfo, setShippingInfo } = props;
    const { name, country, address, zip, city, phone } = shippingInfo;

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
  },

  (props) => {
    const { shippingInfo, billingInfo, setBillingInfo } = props;
    const { name, country, address, zip, city, phone } = billingInfo;

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
          <input type="checkbox" onChange={handleCheck}></input>Same As
          Shipping?
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
  },

  (props) => {
    const { paymentInfo, setPaymentInfo } = props;
    const { cardNumber, name, expire, code } = paymentInfo;
    return (
      <>
        <h1>Payment Info</h1>
        <label>
          Card Number
          <input
            value={cardNumber}
            onChange={(e) => handleInput(e, setPaymentInfo, "cardNumber")}
            style={inputStyle}
          ></input>
        </label>
        <label>
          Name On Card
          <input
            value={name}
            onChange={(e) => handleInput(e, setPaymentInfo, "name")}
            style={inputStyle}
          ></input>
        </label>
        <label>
          Expiry Date
          <input
            value={expire}
            onChange={(e) => handleInput(e, setPaymentInfo, "expire")}
            style={inputStyle}
          ></input>
        </label>
        <label>
          Security Code
          <input
            value={code}
            onChange={(e) => handleInput(e, setPaymentInfo, "code")}
            style={inputStyle}
          ></input>
        </label>
      </>
    );
  },
];

export default checkoutSteps;
