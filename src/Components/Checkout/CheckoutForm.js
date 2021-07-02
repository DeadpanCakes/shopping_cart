import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import orderFactory from "../../orderFactory";
import CheckoutFormTabs from "./CheckoutFormTabs";
import SignupStep from "./SignUpStep";
import ShippingStep from "./ShippingStep";
import BillingStep from "./BillingStep";
import PaymentStep from "./PaymentStep";
import ConfirmationStep from "./ConfirmationStep";
import userFactory from "../../userFactory";

const CheckoutForm = (props) => {
  const history = useHistory();
  const { user, editUser, addOrder, transactionInfo, userComment, addUser, users } =
    props;
  const [isGuest, setIsGuest] = useState(false);
  const [toBeSaved, setToBeSaved] = useState(false);
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
    cardNumber: "",
    name: "",
    expire: "",
    code: "",
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
    } else if (checkoutStep > 1) {
      setCheckoutStep((prevStep) => prevStep - 1);
    }
  };

  const [usingSavedCard, setUsing] = useState(false);
  const toggleSavedCard = () => setUsing((prevState) => !prevState);

  const completeTransaction = () => {
    if (!isGuest && !user) {
      const newUser = userFactory(
        signUpInfo.email,
        signUpInfo.pass,
        shippingInfo,
        billingInfo,
        paymentInfo
      );
      addUser(newUser);
    }
    const order = orderFactory(
      props.items,
      shippingInfo,
      billingInfo,
      usingSavedCard ? user.paymentInfo : paymentInfo,
      transactionInfo,
      userComment,
      user ? user.email : signUpInfo.email
    );
    props.emptyCart();
    addOrder(order);
    if (user) {
      editUser(user.id, "addOrder", order);
    }
    if (toBeSaved) {
      editUser(user.id, "editShipping", {
        name: shippingInfo.name,
        country: shippingInfo.country,
        address: shippingInfo.address,
        zip: shippingInfo.zip,
        city: shippingInfo.city,
        phone: shippingInfo.phone,
      });
      editUser(user.id, "editBilling", {
        name: billingInfo.name,
        country: billingInfo.country,
        address: billingInfo.address,
        zip: billingInfo.zip,
        city: billingInfo.city,
        phone: billingInfo.phone,
      });
      if (!usingSavedCard) {
        editUser(user.id, "editPayment", {
          name: paymentInfo.name,
          cardNumber: paymentInfo.getLastFourDigits(),
          expiration: paymentInfo.expire,
        });
      }
    }
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

  useEffect(() => {
    if (checkoutStep < 4) {
      setUsing(false);
    }
  }, [checkoutStep]);

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
              users={users}
            />,
            <ShippingStep
              shippingInfo={shippingInfo}
              setShippingInfo={setShippingInfo}
              isLoggedIn={user}
            />,
            <BillingStep
              shippingInfo={shippingInfo}
              billingInfo={billingInfo}
              setBillingInfo={setBillingInfo}
              isLoggedIn={user}
            />,
            <PaymentStep
              paymentInfo={paymentInfo}
              setPaymentInfo={setPaymentInfo}
              isLoggedIn={user}
              user={user}
              usingSavedCard={usingSavedCard}
              toggleSavedCard={toggleSavedCard}
              incrementStep={incrementStep}
            />,
            <ConfirmationStep
              signUpInfo={signUpInfo}
              shippingInfo={shippingInfo}
              billingInfo={billingInfo}
              paymentInfo={paymentInfo}
              user={user}
              toBeSaved={toBeSaved}
              setToBeSaved={setToBeSaved}
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
