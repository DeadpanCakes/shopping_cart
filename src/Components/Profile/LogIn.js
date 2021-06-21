import { useState } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  return (
    <UserConsumer>
      {(user) => {
        const { users, loggedUser, signIn } = user;

        const handleInput = (field, value) => {
          switch (field) {
            case "email":
              setEmail(value);
              break;
            case "pass":
              setPass(value);
              break;
            default:
              throw new Error("Something went wrong");
          }
        };

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
          >
            <label>
              Email
              <input
                value={email}
                onChange={(e) => handleInput("email", e.target.value)}
              ></input>
            </label>
            <label>
              Password
              <input
                value={pass}
                onChange={(e) => handleInput("pass", e.target.value)}
                type="password"
              ></input>
            </label>
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
