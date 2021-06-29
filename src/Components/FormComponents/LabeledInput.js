const LabeledInput = (props) => {
  const { label, value, inputHandler, type } = props;

  const handleInput = (input) => {
    inputHandler(input);
  };

  const inputStyle = {
    paddingRight: 30,
    minWidth: 300,
  }

  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        style={inputStyle}
        type={type}
      ></input>
    </>
  );
};

export default LabeledInput;
