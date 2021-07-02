import { useEffect, useState } from "react";
import useSignUpValidation from "../../ValidationHooks/useSignUpValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { UserConsumer } from "../../UserContext";

const SignUpStep = (props) => {
  const { signUpInfo, setSignUpInfo, isGuest, setIsGuest, users } = props;
  const { email, pass, verifyPass } = signUpInfo;
  const [isEmailDupe, setEmailDupe] = useState(false);

  const validation = useSignUpValidation(email, pass, verifyPass);

  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  useEffect(() => {
    if (users.find((user) => user.email === email)) {
      setEmailDupe(true);
    } else {
      setEmailDupe(false);
    }
  }, [email, users]);

  useEffect(() => {
    if (
      !isEmailDupe &&
      validation.isEmailValid &&
      ((validation.isPassValid && validation.isPassSame) || isGuest)
    ) {
      updateState(setSignUpInfo, "isValid", true);
    } else {
      updateState(setSignUpInfo, "isValid", false);
    }
  }, [
    isEmailDupe,
    setSignUpInfo,
    validation.isEmailValid,
    validation.isPassValid,
    validation.isPassSame,
    isGuest,
  ]);

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
    <UserConsumer>
      {(user) => {
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
                  validation.isPassValid
                    ? { ...inputStyle, borderColor: "green" }
                    : inputStyle
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
                  validation.isPassValid
                    ? { ...inputStyle, borderColor: "green" }
                    : inputStyle
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
                  validation.isPassSame
                    ? { ...inputStyle, borderColor: "green" }
                    : inputStyle
                }
                disabled={isGuest}
                className={validation.isPassSame ? null : "invalid"}
              ></input>
              <div
                style={{
                  position: "absolute",
                  right: "5%",
                  color: validation.isPassSame ? "green" : "red",
                }}
              >
                {verifyPass.length > 0 ? (
                  validation.isPassSame ? (
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
      }}
    </UserConsumer>
  );
};

export default SignUpStep;
