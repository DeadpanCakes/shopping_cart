import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import orderFactory from "../../orderFactory";
import CheckoutFormTabs from "./CheckoutFormTabs";
import SignupStep from "./SignUpStep";
import ShippingStep from "./ShippingStep";
import BillingStep from "./BillingStep";
import PaymentStep from "./PaymentStep";
import ConfirmationStep from "./ConfirmationStep";

const CheckoutForm = (props) => {
  const history = useHistory();
  const { user, addOrder, transactionInfo, userComment } = props;
  const [isGuest, setIsGuest] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    pass: "",
    verifyPass: "",
    isValid: false,
  });
  const [shippingInfo, setShippingInfo] = useState({
    name: user ? user.shippingInfo.name : "",
    country: user ? user.shippingInfo.country : "",
    address: user ? user.shippingInfo.address : "",
    zip: user ? user.shippingInfo.zip : "",
    city: user ? user.shippingInfo.city : "",
    phone: user ? user.shippingInfo.phone : "",
    isValid: false,
  });
  const [billingInfo, setBillingInfo] = useState({
    name: user ? user.billingInfo.name : "",
    country: user ? user.billingInfo.country : "",
    address: user ? user.billingInfo.address : "",
    zip: user ? user.billingInfo.zip : "",
    city: user ? user.billingInfo.city : "",
    phone: user ? user.billingInfo.phone : "",
    isValid: false,
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: user ? user.paymentInfo.cardNumber : "",
    name: user ? user.paymentInfo.name : "",
    expire: user ? user.paymentInfo.expiration : "",
    code: user ? user.paymentInfo.code : "",
    isValid: false,
    getLastFourDigits() {
      const lastFour = this.cardNumber.toString().slice(-4);
      const hideNumber = (num) => {
        if (num.length >= this.cardNumber.length) {
          return num;
        }
        return hideNumber("*".concat(num));
      };
      return hideNumber(lastFour);
    },
  });
  const [checkoutStep, setCheckoutStep] = useState(user ? 2 : 1);
  const incrementStep = () => {
    if (checkoutStep < 5) {
      setCheckoutStep((prevStep) => prevStep + 1);
    }
  };
  const decrementStep = () => {
    if (user && checkoutStep > 2) {
      setCheckoutStep((prevStep) => prevStep - 1);
    }
  };

  const completeTransaction = () => {
    const order = orderFactory(
      props.items,
      shippingInfo,
      billingInfo,
      paymentInfo,
      transactionInfo,
      userComment,
      signUpInfo.email
    );
    props.emptyCart();
    addOrder(order);
    history.push(`/shop/orders/${order.id}`);
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
        isLoggedIn={user}
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
      <div style={{ marginBottom: 15 }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            decrementStep();
          }}
          disabled={checkoutStep <= 1}
        >
          Previous Step
        </button>
        {checkoutStep < 5 ? (
          <button onClick={(e) => handleSubmit(e)}>Next Step</button>
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
