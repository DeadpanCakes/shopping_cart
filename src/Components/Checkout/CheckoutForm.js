import { useState } from "react";
import orderFactory from "../../orderFactory";
import CheckoutFormTabs from "./CheckoutFormTabs";
import checkoutSteps from "./checkoutSteps";

const CheckoutForm = (props) => {
  const [isGuest, setIsGuest] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    pass: "",
    verifyPass: "",
  });
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
  });
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    name: "",
    expire: "",
    code: "",
  });
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
        return (
          <ShippingSection
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
          />
        );
      case 3:
        return (
          <BillingSection
            shippingInfo={shippingInfo}
            billingInfo={billingInfo}
            setBillingInfo={setBillingInfo}
          />
        );
      case 4:
        return (
          <PaymentSection
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
          />
        );
      default:
        return (
          <SignUpSection
            signUpInfo={signUpInfo}
            setSignUpInfo={setSignUpInfo}
            isGuest={isGuest}
            setIsGuest={setIsGuest}
          />
        );
    }
  };

  const completeTransaction = () => {
    //Generate order using orderFactory
    const order = orderFactory(
      props.items,
      new Date(),
      shippingInfo,
      billingInfo,
      paymentInfo
    );
    console.log(order);
    props.emptyCart();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkoutStep < 4) {
      incrementStep();
    } else {
      completeTransaction();
    }
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (checkoutStep < 4) {
        incrementStep();
      } else {
        completeTransaction();
      }
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onKeyPress={handleKeyPress}
      id="checkoutForm"
    >
      <CheckoutFormTabs checkoutStep={checkoutStep} setCheckoutStep={setCheckoutStep} />
      <div>{fetchStep(checkoutStep)}</div>
      <div>
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
      </div>
    </form>
  );
};

export default CheckoutForm;
