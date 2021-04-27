import { useState } from "react";

const checkoutSteps = [
  (props) => {
    const { signUpInfo, setSignUpInfo } = props;
    const { email, pass, verifyPass } = signUpInfo;

    const updateState = (field, value) => {
      setSignUpInfo((prevState) => {
        return { ...prevState, [field]: value };
      });
    };

    const handleInput = (event, field) => {
      event.preventDefault();
      updateState(field, event.target.value);
    };

    return (
      <>
        <h1>Sign Up!</h1>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => {
              handleInput(e, 'email');
            }}
          ></input>
        </label>
        <label>
          Password
          <input></input>
        </label>
        <label>
          Confirm Password
          <input></input>
        </label>
      </>
    );
  },

  (props) => {
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
