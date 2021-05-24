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
  const [isEmailValid, setEmailVaild] = useState(false);
  const [isPassValid, setPassValid] = useState(false);
  const [isPassLengthValid, setLengthValid] = useState(false);
  const [passHasUpper, setUpperValid] = useState(false);
  const [passHasLower, setLowerValid] = useState(false);
  const [passHasDigit, setDigitValid] = useState(false);
  const [passHasSymbol, setSymbolValid] = useState(false);
  const [isPassSame, setSame] = useState(false);

  useEffect(() => {
    setEmailVaild(/^[\w.]+[@][\w-.]+[.][\S]+$/gm.test(email));
  }, [email]);

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

  useEffect(() => {
    if (isEmailValid && ((isPassValid && isPassSame) || isGuest)) {
      updateState(setSignUpInfo, "isValid", true);
    } else {
      updateState(setSignUpInfo, "isValid", false);
    }
  }, [setSignUpInfo, isEmailValid, isPassValid, isPassSame, isGuest]);

  const inputStyle = {
    margin: 10,
    paddingRight: 30,
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
      <label style={{ position: "relative" }}>
        Email
        <input
          value={email}
          onChange={(e) => {
            handleInput(e, setSignUpInfo, "email");
          }}
          style={
            isPassValid ? { ...inputStyle, borderColor: "green" } : inputStyle
          }
        ></input>
        <div
          style={{
            position: "absolute",
            right: "32%",
            color: isEmailValid ? "green" : "red",
          }}
        >
          {email.length > 0 ? (
            isEmailValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={{ position: "relative" }}>
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
        <div
          style={{
            position: "absolute",
            right: "23%",
            color: isPassValid ? "green" : "red",
          }}
        >
          {pass.length > 0 ? (
            isPassValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={{ position: "relative" }}>
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
        <div
          style={{
            position: "absolute",
            right: "5%",
            color: isPassSame ? "green" : "red",
          }}
        >
          {verifyPass.length > 0 ? (
            isPassSame ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <h3>Passwords should contain:</h3>
      <ul>
        <li style={liStyle}>
          <FontAwesomeIcon
            size="xs"
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
            size="xs"
            icon={
              pass.length > 0
                ? passHasUpper
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />
          At least 1 capital letter
        </li>
        <li style={liStyle}>
          <FontAwesomeIcon
            size="xs"
            icon={
              pass.length > 0
                ? passHasLower
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />
          At least 1 lower case letter
        </li>
        <li style={liStyle}>
          <FontAwesomeIcon
            size="xs"
            icon={
              pass.length > 0
                ? passHasSymbol
                  ? faCheckCircle
                  : faTimesCircle
                : faCircle
            }
          />
          At least one symbol
        </li>
      </ul>
    </>
  );
};

export default SignUpStep;
