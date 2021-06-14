import { useState } from "react";
import { UserConsumer } from "../../UserContext";
import useUsers from "../../useUsers";

const LogIn = () => {
  const { users } = useUsers();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, signIn } = user;

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
            signIn(user);
            //navigate home
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
            {message ? <p>{message}</p> : null}
            <button>Log In</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(users);
              }}
            >
              check
            </button>
          </form>
        );
      }}
    </UserConsumer>
  );
};

export default LogIn;
