import { useState } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import { useHistory } from "react-router-dom";
import LabeledInput from "../FormComponents/LabeledInput";
import Hero from "../Generic/Hero";
import heroImg from "../../img/aboutImg1.webp";
import Notification from "../Generic/Notification";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  return (
    <UserConsumer>
      {(user) => {
        const { users, signIn } = user;

        const handleSubmit = (email, pass) => {
          if (
            users.find((user) => {
              return user.email === email && user.password === pass;
            })
          ) {
            const user = users.find((user) => {
              return user.email === email && user.password === pass;
            });
            signIn(user.id);
            history.push("/");
          } else {
            setMessage("Information not recognized. Please try again.");
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
              <h1 style={{ position: "absolute", bottom: "0%", left: "3%" }}>
                Log In
              </h1>
            </Hero>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(email, pass);
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginTop: 50,
              }}
            >
              <div style={{ margin: 10 }}>
                <LabeledInput
                  label="Email"
                  value={email}
                  inputHandler={setEmail}
                  type="text"
                />
                <LabeledInput
                  label="Password"
                  value={pass}
                  inputHandler={setPass}
                  type="password"
                />
              </div>
              <Link to="/profile/sign-up">Don't Have A Profile? Sign up!</Link>
              {message ? (
                <Notification message={message} notificationType="error" />
              ) : null}
              <button>Log In</button>
            </form>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default LogIn;
