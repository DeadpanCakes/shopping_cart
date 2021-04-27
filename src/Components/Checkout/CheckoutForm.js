import { useState } from "react";
import checkoutSteps from "./checkoutSteps";

const CheckoutForm = (props) => {
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

  const [
    SignUpSection,
    ShippingSection,
    BillingSection,
    PaymentSection,
  ] = checkoutSteps;

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
      {checkoutStep < 4 ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            incrementStep();
          }}
        >
          Next Step
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            props.emptyCart();
          }}
        >
          Place Order
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
