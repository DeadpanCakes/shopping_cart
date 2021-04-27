import { useState } from "react";
import orderFactory from "../../orderFactory";
import checkoutSteps from "./checkoutSteps";

const CheckoutForm = (props) => {
  const [signUpInfo, setSignUpInfo] = useState({email: '', pass: '', verifyPass: ''})
  const [shippingInfo, setShippingInfo] = useState({name: '',country: '', address: '', zip: '', city: '', phone: ''})
  const [billingInfo, setBillingInfo] = useState({name: '',country: '', address: '', zip: '', city: '', phone: ''})
  const [paymentInfo, setPaymentInfo] = useState({cardNumber: '', name: '', expire: '', code: ''})
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
      case 2:
        return <ShippingSection shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}/>;
      case 3:
        return <BillingSection billingInfo={billingInfo} setBillingInfo={setBillingInfo} />;
      case 4:
        return <PaymentSection paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}/>;
      default:
        return <SignUpSection signUpInfo={signUpInfo} setSignUpInfo={setSignUpInfo} />;
    }
  };

  const completeTransaction = () => {
    //Generate order using orderFactory 
    props.emptyCart()
  }

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
            completeTransaction();
          }}
        >
          Place Order
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
