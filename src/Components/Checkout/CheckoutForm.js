import { useState } from "react";

const SignUpSection = () => {
  return (
    <>
      <h1>Sign Up!</h1>
      <label>
        Email
        <input type="email"></input>
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
};

const ShippingSection = () => {
  return (
    <>
      <h1>Shipping Info</h1>
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
};

const BillingSection = () => {
  return (
    <>
      <h1>Billing Info</h1>
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
};

const PaymentSection = () => {
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
};

const CheckoutForm = () => {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const incrementStep = () => {
    if (checkoutStep < 4) {
      setCheckoutStep((prevStep) => prevStep + 1);
    }
  };
  const decrementStep = () => {
    if (checkoutStep > 1) {
      setCheckoutStep((prevStep) => prevStep - 1);
    }
  };

  const fetchStep = (step) => {
    switch (step) {
      case 1:
        return <SignUpSection />;
      case 2:
        return <ShippingSection />;
      case 3:
        return <BillingSection />;
      case 4:
        return <PaymentSection />;
      default:
        return <SignUpSection />;
    }
  };

  return (
    <form>
        <p>{checkoutStep}</p>
      {fetchStep(checkoutStep)}
      <button
        onClick={(e) => {
          e.preventDefault();
          decrementStep();
        }}
      >
        Previous Step
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          incrementStep();
        }}
      >
        Next Step
      </button>
    </form>
  );
};

export default CheckoutForm;
