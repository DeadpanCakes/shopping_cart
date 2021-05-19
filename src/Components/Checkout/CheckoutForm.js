import { useState } from "react";
import orderFactory from "../../orderFactory";
import CheckoutFormTabs from "./CheckoutFormTabs";
import SignupStep from "./SignUpStep";
import ShippingStep from "./ShippingStep";
import BillingStep from "./BillingStep";
import PaymentStep from "./PaymentStep";
import ConfirmationStep from "./ConfirmationStep";

const CheckoutForm = (props) => {
  const [isGuest, setIsGuest] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    pass: "",
    verifyPass: "",
    isValid: false,
  });
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
    isValid: false,
  });
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
    isValid: false,
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    name: "",
    expire: "",
    code: "",
    isValid: false,
  });
  const [checkoutStep, setCheckoutStep] = useState(1);
  const incrementStep = () => {
    if (checkoutStep < 5) {
      setCheckoutStep((prevStep) => prevStep + 1);
    }
  };
  const decrementStep = () => {
    if (checkoutStep > 1) {
      setCheckoutStep((prevStep) => prevStep - 1);
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

  const checkIfComplete = (isValid) => {
    if (isValid) {
      if (checkoutStep < 5) {
        incrementStep();
      } else {
        completeTransaction();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (checkoutStep) {
      case 1:
        checkIfComplete(signUpInfo.isValid);
        break;
      case 2:
        checkIfComplete(shippingInfo.isValid);
        break;
      case 3:
        checkIfComplete(billingInfo.isValid);
        break;
      case 4:
        checkIfComplete(paymentInfo.isValid);
        break;
      case 5:
        return true;
      default:
        console.log(checkoutStep);
        return false;
    }
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      switch (checkoutStep) {
        case 1:
          checkIfComplete(signUpInfo.isValid);
          break;
        case 2:
          checkIfComplete(shippingInfo.isValid);
          break;
        case 3:
          checkIfComplete(billingInfo.isValid);
          break;
        case 4:
          checkIfComplete(paymentInfo.isValid);
          break;
        case 5:
          return true;
        default:
          console.log(checkoutStep);
          return false;
      }
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onKeyPress={handleKeyPress}
      id="checkoutForm"
    >
      <CheckoutFormTabs
        checkoutStep={checkoutStep}
        setCheckoutStep={setCheckoutStep}
      />
      <div>
        {
          [
            <SignupStep
              signUpInfo={signUpInfo}
              setSignUpInfo={setSignUpInfo}
              isGuest={isGuest}
              setIsGuest={setIsGuest}
            />,
            <ShippingStep
              shippingInfo={shippingInfo}
              setShippingInfo={setShippingInfo}
            />,
            <BillingStep
              shippingInfo={shippingInfo}
              billingInfo={billingInfo}
              setBillingInfo={setBillingInfo}
            />,
            <PaymentStep
              paymentInfo={paymentInfo}
              setPaymentInfo={setPaymentInfo}
            />,
            <ConfirmationStep
              signUpInfo={signUpInfo}
              shippingInfo={shippingInfo}
              billingInfo={billingInfo}
              paymentInfo={paymentInfo}
            />,
          ][checkoutStep - 1]
        }
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            decrementStep();
          }}
        >
          Previous Step
        </button>
        {checkoutStep < 5 ? (
          <button onClick={(e) => handleSubmit(e)}>
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
