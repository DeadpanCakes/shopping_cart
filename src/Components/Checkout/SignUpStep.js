import { useState, useEffect } from "react";
import useSignUpValidation from "../../ValidationHooks/useSignUpValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const SignUpStep = (props) => {
  const { signUpInfo, setSignUpInfo, isGuest, setIsGuest } = props;
  const { email, pass, verifyPass } = signUpInfo;
  const [isPassSame, setSame] = useState(false);

  const validation = useSignUpValidation(email, pass);

  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  useEffect(() => {
    if (pass === verifyPass && pass.length >= 8) {
      setSame(true);
    } else {
      setSame(false);
    }
  },[pass, verifyPass])

  useEffect(() => {
    if (validation.isEmailValid && ((validation.isPassValid && isPassSame) || isGuest)) {
      updateState(setSignUpInfo, "isValid", true);
      console.log("it's valid baby")
    } else {
      updateState(setSignUpInfo, "isValid", false);
    }
  }, [setSignUpInfo, validation.isEmailValid, validation.isPassValid, isPassSame, isGuest]);

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
            validation.isPassValid ? { ...inputStyle, borderColor: "green" } : inputStyle
          }
        ></input>
        <div
          style={{
            position: "absolute",
            right: "32%",
            color: validation.isEmailValid ? "green" : "red",
          }}
        >
          {email.length > 0 ? (
            validation.isEmailValid ? (
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
            validation.isPassValid ? { ...inputStyle, borderColor: "green" } : inputStyle
          }
          disabled={isGuest}
          className={validation.isPassValid ? null : "invalid"}
        ></input>
        <div
          style={{
            position: "absolute",
            right: "23%",
            color: validation.isPassValid ? "green" : "red",
          }}
        >
          {pass.length > 0 ? (
            validation.isPassValid ? (
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
                ? validation.isPassLengthValid
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
                ? validation.passHasUpper
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
                ? validation.passHasLower
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
                ? validation.passHasSymbol
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
