import { useState } from "react";

const updateState = (setState, field, value) => {
  setState((prevState) => {
    return { ...prevState, [field]: value };
  });
};

const handleInput = (event, setState, field) => {
  updateState(setState, field, event.target.value);
};

const checkoutSteps = [
  (props) => {
    const { signUpInfo, setSignUpInfo } = props;
    const { email, pass, verifyPass } = signUpInfo;

    return (
      <>
        <h1>Sign Up!</h1>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => {
              handleInput(e, setSignUpInfo, "email");
            }}
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
          ></input>
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={verifyPass}
            onChange={(e) => handleInput(e, setSignUpInfo, "verifyPass")}
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
          ></input>
        </label>
        <label>
          Country*
          <input
            value={country}
            onChange={(e) => handleInput(e, setShippingInfo, "country")}
          ></input>
        </label>
        <label>
          Address*
          <textarea
            value={address}
            onChange={(e) => handleInput(e, setShippingInfo, "address")}
          ></textarea>
        </label>
        <label>
          ZIP/Postal
          <input
            value={zip}
            onChange={(e) => handleInput(e, setShippingInfo, "zip")}
          ></input>
        </label>
        <label>
          City
          <input
            value={city}
            onChange={(e) => handleInput(e, setShippingInfo, "city")}
          ></input>
        </label>
        <label>
          Phone Number
          <input
            value={phone}
            onChange={(e) => handleInput(e, setShippingInfo, "phone")}
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
          ></input>
        </label>
        <label>
          Country*
          <input
            value={country}
            onChange={(e) => handleInput(e, setBillingInfo, "country")}
          ></input>
        </label>
        <label>
          Address*
          <textarea
            value={address}
            onChange={(e) => handleInput(e, setBillingInfo, "address")}
          ></textarea>
        </label>
        <label>
          ZIP/Postal
          <input
            value={zip}
            onChange={(e) => handleInput(e, setBillingInfo, "zip")}
          ></input>
        </label>
        <label>
          City
          <input
            value={city}
            onChange={(e) => handleInput(e, setBillingInfo, "city")}
          ></input>
        </label>
        <label>
          Phone Number
          <input
            value={phone}
            onChange={(e) => handleInput(e, setBillingInfo, "phone")}
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
          ></input>
        </label>
        <label>
          Name On Card
          <input
            value={name}
            onChange={(e) => handleInput(e, setPaymentInfo, "name")}
          ></input>
        </label>
        <label>
          Expiry Date
          <input
            value={expire}
            onChange={(e) => handleInput(e, setPaymentInfo, "expire")}
          ></input>
        </label>
        <label>
          Security Code
          <input
            value={code}
            onChange={(e) => handleInput(e, setPaymentInfo, "code")}
          ></input>
        </label>
      </>
    );
  },
];

export default checkoutSteps;
