import { useState } from "react";

const updateState = (setState, field, value) => {
  setState((prevState) => {
    return { ...prevState, [field]: value };
  });
};

const handleInput = (event, setState, field) => {
  event.preventDefault();
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
    const {shippingInfo, setShippingInfo} = props;
    const {name, country, address, zip, city, phone} = shippingInfo;
  
    return (
      <>
        <h1>Shipping Info</h1>
        <label>
          Name
          <input></input>
        </label>
        <label>
          Country*
          <input></input>
        </label>
        <label>
          Address*
          <textarea></textarea>
        </label>
        <label>
          ZIP/Postal
          <input></input>
        </label>
        <label>
          City
          <input></input>
        </label>
        <label>
          Phone Number
          <input></input>
        </label>
      </>
    );
  },

  (props) => {
    return (
      <>
        <h1>Billing Info</h1>
        <label>
          Name
          <input></input>
        </label>
        <label>
          Country*
          <input></input>
        </label>
        <label>
          Address*
          <textarea></textarea>
        </label>
        <label>
          ZIP/Postal
          <input></input>
        </label>
        <label>
          City
          <input></input>
        </label>
        <label>
          Phone Number
          <input></input>
        </label>
      </>
    );
  },

  (props) => {
    return (
      <>
        <h1>Payment Info</h1>
        <label>
          Card Number
          <input></input>
        </label>
        <label>
          Name On Card
          <input></input>
        </label>
        <label>
          Expiry Date
          <input></input>
        </label>
        <label>
          Security Code
          <input></input>
        </label>
      </>
    );
  },
];

export default checkoutSteps;
