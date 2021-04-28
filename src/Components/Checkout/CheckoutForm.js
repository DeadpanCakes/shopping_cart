import { useState, useEffect } from "react";
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

  useEffect(() => {
    const form = document.getElementById('checkoutForm');
    const listener = (event) => {
      if (event.code === 'Enter' || event.code=== 'NumpadEnter') {
        incrementStep();
      }
    }
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown',listener);
  },[])

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitreached')
    if (checkoutStep < 4 ) {
      console.log('test.pcrh')
      incrementStep()
    }
    else {
      completeTransaction()
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} id='checkoutForm'>
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
      <button>test</button>
    </form>
  );
};

export default CheckoutForm;
