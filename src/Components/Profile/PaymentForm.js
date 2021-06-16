import { useState } from "react";

const PaymentForm = (props) => {
  const { user, editUser, toggleEdit } = props;
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [code, setCode] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleInput = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "card":
        setCard(value);
        break;
      case "code":
        setCode(value);
        break;
      case "expiry":
        setExpiry(value);
        break;
      default:
        throw new Error("Invalid Field");
    }
  };

  const handleSubmit = (newData) => {
    console.log(user.loggedUser.id, newData)
    editUser(user.loggedUser.id, "editPayment", newData);
    toggleEdit();
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
    >
      <label>
        Name On Card
        <input
          value={name}
          onChange={(e) => handleInput("name", e.target.value)}
        ></input>
      </label>
      <label>
        Card Number
        <input
          value={card}
          onChange={(e) => handleInput("card", e.target.value)}
        ></input>
      </label>
      <label>
        Code
        <input
          value={code}
          onChange={(e) => handleInput("code", e.target.value)}
        ></input>
      </label>
      <label>
        Expiration
        <input
          value={expiry}
          onChange={(e) => handleInput("expiry", e.target.value)}
        ></input>
      </label>
      <button>Submit</button>
      <button onClick={(e) => {e.preventDefault(); console.log(user)}}>check</button>
    </form>
  );
};

export default PaymentForm;
