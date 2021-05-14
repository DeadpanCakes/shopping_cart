import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const SignUpStep = (props) => {
  const { signUpInfo, setSignUpInfo, isGuest, setIsGuest } = props;
  const { email, pass, verifyPass } = signUpInfo;
  const [isPassValid, setPassValid] = useState(false);
  const [isPassLengthValid, setLengthValid] = useState(false);
  const [passHasUpper, setUpperValid] = useState(false);
  const [passHasLower, setLowerValid] = useState(false);
  const [passHasDigit, setDigitValid] = useState(false);
  const [passHasSymbol, setSymbolValid] = useState(false);
  const [isPassSame, setSame] = useState(false);

  useEffect(() => {
    setSame(pass === verifyPass && verifyPass.length > 8);
  }, [pass, verifyPass]);

  useEffect(() => {
    setLengthValid(/\S{8,20}/.test(pass));
    setUpperValid(/[A-Z]/.test(pass));
    setLowerValid(/[a-z]/.test(pass));
    setDigitValid(/\d/.test(pass));
    setSymbolValid(/\W/.test(pass));
  }, [pass]);

  useEffect(() => {
    setPassValid(
      [
        isPassLengthValid,
        passHasUpper,
        passHasLower,
        passHasDigit,
        passHasSymbol,
      ].every((criteria) => criteria === true)
    );
  }, [
    isPassLengthValid,
    passHasUpper,
    passHasLower,
    passHasDigit,
    passHasSymbol,
  ]);

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
          style={
            isPassValid ? { ...inputStyle, borderColor: "green" } : inputStyle
          }
          disabled={isGuest}
          className={isPassValid ? null : "invalid"}
        ></input>
        {pass.length > 0 ? (
          isPassValid ? (
            <FontAwesomeIcon icon={faCheckCircle} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} />
          )
        ) : null}
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={verifyPass}
          onChange={(e) => handleInput(e, setSignUpInfo, "verifyPass")}
          style={
            isPassSame ? { ...inputStyle, borderColor: "green" } : inputStyle
          }
          disabled={isGuest}
          className={isPassSame ? null : "invalid"}
        ></input>
        {verifyPass.length > 0 ? (
          isPassSame ? (
            <FontAwesomeIcon icon={faCheckCircle} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} />
          )
        ) : null}
      </label>
      <h3>Passwords should contain:</h3>
      <ul>
        <li style={liStyle}>
          <FontAwesomeIcon
          size='xs'
            icon={
              pass.length > 0
                ? isPassLengthValid
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />
          At least 8 characters
        </li>
        <li style={liStyle}>
          <FontAwesomeIcon
          size='xs'
            icon={
              pass.length > 0
                ? passHasUpper
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />At least 1 capital letter</li>
        <li style={liStyle}>
          <FontAwesomeIcon
          size='xs'
            icon={
              pass.length > 0
                ? passHasLower
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />At least 1 lower case letter</li>
        <li style={liStyle}>
          <FontAwesomeIcon
          size='xs'
            icon={
              pass.length > 0
                ? passHasSymbol
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />At least one symbol</li>
      </ul>
    </>
  );
};

export default SignUpStep;
