const SignUpStep = (props) => {
  const { signUpInfo, setSignUpInfo, isGuest, setIsGuest } = props;
  const { email, pass, verifyPass } = signUpInfo;

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

  const toggleCheck = () => {
    setIsGuest((prevState) => !prevState);
  };

  const ulStyle = {
    listStyleType: "circle",
  };

  const liStyle = {
    marginLeft: 25,
  };

  return (
    <>
      <h1>Sign Up!</h1>
      <label>
        <input
          type="checkbox"
          onChange={toggleCheck}
          defaultChecked={isGuest}
        ></input>
        Or check out as guest
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => {
            handleInput(e, setSignUpInfo, "email");
          }}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            handleInput(e, setSignUpInfo, "pass");
          }}
          style={inputStyle}
          disabled={isGuest}
        ></input>
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={verifyPass}
          onChange={(e) => handleInput(e, setSignUpInfo, "verifyPass")}
          style={inputStyle}
          disabled={isGuest}
        ></input>
      </label>
      <h3>Passwords should contain:</h3>
      <ul style={ulStyle}>
        <li style={liStyle}>At least 8 characters</li>
        <li style={liStyle}>At least 1 capital letter</li>
        <li style={liStyle}>At least 1 lower case letter</li>
        <li style={liStyle}>At least one symbol</li>
      </ul>
    </>
  );
};

export default SignUpStep;
