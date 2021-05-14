const PaymentStep = (props) => {
  const { paymentInfo, setPaymentInfo } = props;
  const { cardNumber, name, expire, code } = paymentInfo;
  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  const inputStyle = {
    margin: 10,
  };
  const shortInputStyle = { ...inputStyle, width: 70 };
  return (
    <>
      <h1>Payment Info</h1>
      <label>
        Card Number
        <input
          value={cardNumber}
          onChange={(e) => handleInput(e, setPaymentInfo, "cardNumber")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Name On Card
        <input
          value={name}
          onChange={(e) => handleInput(e, setPaymentInfo, "name")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Expiry Date
        <input
          value={expire}
          onChange={(e) => handleInput(e, setPaymentInfo, "expire")}
          style={shortInputStyle}
          placeholder="MM/YY"
        ></input>
      </label>
      <label>
        Security Code
        <input
          value={code}
          onChange={(e) => handleInput(e, setPaymentInfo, "code")}
          style={shortInputStyle}
        ></input>
      </label>
    </>
  );
};

export default PaymentStep;
