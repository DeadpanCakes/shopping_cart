import { useState, useEffect } from "react";
import userFactory from "../../userFactory";
import { UserConsumer } from "../../UserContext";
import useSignUpValidation from "../../ValidationHooks/useSignUpValidation";
import PassCriteria from "./PassCriteria";
import ValidatedInput from "../FormComponents/ValidatedInput";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");

  const validation = useSignUpValidation(email, password, verify);
  const { isEmailValid, isPassValid, isPassSame } = validation;

  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(isEmailValid && isPassValid && isPassSame);
  }, [isEmailValid, isPassValid, isPassSame]);

  return (
    <UserConsumer>
      {(user) => {
        const { users, addUser } = user;

        const handleSubmit = (event) => {
          event.preventDefault();
          //If all fields are valid and this email is not associated with an existing user
          if (isFormValid) {
            if (!users.find((user) => user.email === email)) {
              const newUser = userFactory(email, password);
              addUser(newUser);
            } else {
              console.log("email in use");
            }
          } else {
            console.log(
              "email:",
              isEmailValid,
              "pass:",
              isPassValid,
              "verify",
              isPassSame
            );
          }
        };
        return (
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 100,
              minHeight: '100vh'
            }}
          >
            <ValidatedInput
              label="Email"
              value={email}
              inputHandler={setEmail}
              isValid={isEmailValid}
            />
            <ValidatedInput
              label="Password"
              value={password}
              inputHandler={setPassword}
              isValid={isPassValid}
              type="password"
            />
            <ValidatedInput
              label="Confirm Password"
              value={verify}
              inputHandler={setVerify}
              isValid={isPassSame}
              type="password"
            />
            <PassCriteria pass={password} validation={validation} />
            <button>Sign Up</button>
          </form>
        );
      }}
    </UserConsumer>
  );
};

export default SignUp;
