import { useState, useEffect } from "react";
import ValidatedInput from "../FormComponents/ValidatedInput";
import Notification from "../Generic/Notification";
import usePaymentValidation from "../../ValidationHooks/usePaymentValidation";

const PaymentForm = (props) => {
  const { user, editUser, toggleEdit, isBeingEdited } = props;
  const { loggedUser } = user;
  const { paymentInfo } = loggedUser;

  const [name, setName] = useState(paymentInfo.name ? paymentInfo.name : "");
  const [card, setCard] = useState(
    paymentInfo.cardNumber ? paymentInfo.cardNumber : ""
  );
  const [code, setCode] = useState(paymentInfo.code ? paymentInfo.code : "");
  const [expiry, setExpiry] = useState(
    paymentInfo.expiration ? paymentInfo.expiration : ""
  );

  const [isFormValid, setFormValid] = useState(false);
  const validation = usePaymentValidation(card, expiry, name, code);
  const { isNumberValid, isExpireValid, isNameValid, isCodeValid } = validation;
  useEffect(() => {
    setFormValid(isNameValid && isNumberValid && isExpireValid && isCodeValid);
  }, [isNameValid, isNumberValid, isExpireValid, isCodeValid]);

  const [message, setMessage] = useState({});
  const genMessage = (text, notificationType) => {
    setMessage({ text, notificationType });
    setTimeout(() => {
      setMessage({});
    }, 2000);
  };

  const handleSubmit = (newData) => {
    if (isFormValid) {
      editUser(user.loggedUser.id, "editPayment", newData);
      toggleEdit();
    } else {
      genMessage(
        "Please check that all info is formatted properly.",
        "error"
      );
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name: name,
          cardNumber: card,
          code: code,
          expiration: expiry,
        });
      }}
      className={
        isBeingEdited
          ? "profileForm profileFormExpanded"
          : "profileForm profileFormCollapsed"
      }
    >
      <ValidatedInput
        label="Name On Card"
        value={name}
        inputHandler={setName}
        isValid={isNameValid}
      />
      <ValidatedInput
        label="Card Number"
        value={card}
        inputHandler={setCard}
        isValid={isNumberValid}
      />
      <ValidatedInput
        label="Expiration"
        value={expiry}
        inputHandler={setExpiry}
        isValid={isExpireValid}
      />
      <ValidatedInput
        label="Security Code"
        value={code}
        inputHandler={setCode}
        isValid={isCodeValid}
      />
      <button>Submit</button>
      {message.text ? (
        <Notification
          message={message.text}
          notificationType={message.notificationType}
          miscStyle={{ position: "absolute" }}
        />
      ) : null}
    </form>
  );
};

export default PaymentForm;
