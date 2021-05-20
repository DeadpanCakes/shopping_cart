import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const PaymentStep = (props) => {
  const { paymentInfo, setPaymentInfo } = props;
  const { cardNumber, name, expire, code } = paymentInfo;

  const [isNumberValid, setNumberValid] = useState(false);
  const [isNameValid, setNameValid] = useState(false);
  const [isExpireValid, setExpireValid] = useState(false);
  const [isCodeValid, setCodeValid] = useState(false);

  useEffect(() => {
    setNumberValid(/^[\d]{13,}$/.test(cardNumber));
  }, [cardNumber]);
  useEffect(() => {
    setNameValid(/[\S]+/.test(name));
  }, [name]);
  useEffect(() => {
    setExpireValid(/^[\d]{2}\/[\d]{2}$/.test(expire));
  }, [expire]);
  useEffect(() => {
    setCodeValid(/^[\d]{3,4}$/.test(code));
  }, [code]);

  useEffect(() => {
    if (isNumberValid && isNameValid && isExpireValid && isCodeValid) {
      setPaymentInfo((prevState) => {
        return { ...prevState, isValid: true };
      });
    } else {
      setPaymentInfo((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
  }, [setPaymentInfo, isNumberValid, isNameValid, isExpireValid, isCodeValid]);

  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  const labelStyle = { position: "relative" };
  const inputStyle = {
    margin: 10,
    paddingRight: 25,
  };
  const shortInputStyle = { ...inputStyle, width: 70 };
  return (
    <>
      <p>{isExpireValid.toString()}</p>
      <h1>Payment Info</h1>
      <label style={labelStyle}>
        Card Number
        <input
          value={cardNumber}
          onChange={(e) => handleInput(e, setPaymentInfo, "cardNumber")}
          style={inputStyle}
        ></input>
        <div
          style={{
            position: "absolute",
            right: "28%",
            color: isNumberValid ? "green" : "red",
          }}
        >
          {cardNumber.length > 0 ? (
            isNumberValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={labelStyle}>
        Name On Card
        <input
          value={name}
          onChange={(e) => handleInput(e, setPaymentInfo, "name")}
          style={inputStyle}
        ></input>
        <div
          style={{
            position: "absolute",
            right: "26%",
            color: isNameValid ? "green" : "red",
          }}
        >
          {name.length > 0 ? (
            isNameValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={labelStyle}>
        Expiry Date
        <input
          value={expire}
          onChange={(e) => handleInput(e, setPaymentInfo, "expire")}
          style={shortInputStyle}
          placeholder="MM/YY"
        ></input>
        <div
          style={{
            position: "absolute",
            right: "57%",
            color: isExpireValid ? "green" : "red",
          }}
        >
          {expire.length > 0 ? (
            isExpireValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={labelStyle}>
        Security Code
        <input
          value={code}
          onChange={(e) => handleInput(e, setPaymentInfo, "code")}
          style={shortInputStyle}
        ></input>
        <div
          style={{
            position: "absolute",
            right: "54%",
            color: isCodeValid ? "green" : "red",
          }}
        >
          {code.length > 0 ? (
            isCodeValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
    </>
  );
};

export default PaymentStep;
