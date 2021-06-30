import { useState } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import { useHistory } from "react-router-dom";
import LabeledInput from "../FormComponents/LabeledInput";

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(email, pass);
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 100,
              minHeight: "100vh",
            }}
          >
            <div style={{margin: 10}}>
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
            {message ? <p>{message}</p> : null}
            <button>Log In</button>
          </form>
        );
      }}
    </UserConsumer>
  );
};

export default LogIn;
