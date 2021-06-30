import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import userFactory from "../../userFactory";
import { UserConsumer } from "../../UserContext";
import useSignUpValidation from "../../ValidationHooks/useSignUpValidation";
import PassCriteria from "./PassCriteria";
import ValidatedInput from "../FormComponents/ValidatedInput";
import Notification from "../Generic/Notification";
import Hero from "../Generic/Hero";
import heroImg from "../../img/signupBannerFM.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [message, setMessage] = useState({});

  const history = useHistory();

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
              setMessage({
                type: "confirmation",
                text: "Successfully Registered. Please Wait.",
              });
              setTimeout(() => {
                history.push("/profile/log-in");
              }, 2000);
            } else {
              setMessage({
                type: "error",
                text: "Email Already Associated With An Account. Please Use Another.",
              });
            }
          } else {
            if (!isEmailValid) {
              setMessage({ type: "error", text: "Invalid Email." });
            } else if (!isPassValid) {
              setMessage({
                type: "error",
                text: "Password Does Not Meet Requirements. Ensure All Are Checked.",
              });
            } else if (!isPassSame) {
              setMessage({ type: "error", text: "Passwords Do Not Match." });
            }
          }
        };
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <Hero img={heroImg}>
              <h1
                style={{
                  position: "absolute",
                  left: "3%",
                  bottom: "1%",
                  color: "aliceblue",
                  textShadow: "0 0 5px black",
                  backgroundColor: "#f0f8ff95",
                  padding: 10,
                }}
              >
                Sign Up
              </h1>
            </Hero>
            <form
              onSubmit={(e) => handleSubmit(e)}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 30,
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
              <section>
                <PassCriteria pass={password} validation={validation} />
                <button style={{ alignSelf: "flex-end" }}>Sign Up</button>
                {message.text ? (
                  <Notification
                    notificationType={message.type}
                    message={message.text}
                  />
                ) : null}
              </section>
            </form>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default SignUp;
