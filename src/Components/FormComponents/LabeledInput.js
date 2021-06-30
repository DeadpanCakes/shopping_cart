const LabeledInput = (props) => {
  const { label, value, inputHandler, type } = props;

  const inputStyle = {
    paddingRight: 30,
    minWidth: 300,
  }

  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => inputHandler(e.target.value)}
        style={inputStyle}
        type={type}
      ></input>
    </>
  );
};

export default LabeledInput;
