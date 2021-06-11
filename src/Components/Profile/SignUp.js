import { useState, useEffect } from "react";
import userFactory from "../../userFactory";
import useUsers from "../../useUsers";

const SignUp = () => {
  const {users, addUser} = useUsers();

  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailVaild] = useState(false);

  const [password, setPassword] = useState("");
  const [isPassValid, setPassVaild] = useState(false);
  const [isLengthValid, setLengthValid] = useState(false);
  const [isUpperValid, setUpperValid] = useState(false);
  const [isLowerValid, setLowerValid] = useState(false);
  const [isDigitValid, setDigitValid] = useState(false);
  const [isSymbolValid, setSymbolValid] = useState(false);

  const [verify, setVerify] = useState("");
  const [isPassSame, setSameValid] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  const handleInput = (field, value) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "verify":
        setVerify(value);
        break;
      default:
        throw new Error(value);
    }
  };

  useEffect(() => {
    setEmailVaild(/^[\w.]+[@][\w-.]+[.][\S]+$/gm.test(email));
  }, [email]);

  useEffect(() => {
    setLengthValid(/\S{8,20}/.test(password));
    setUpperValid(/[A-Z]/.test(password));
    setLowerValid(/[a-z]/.test(password));
    setDigitValid(/\d/.test(password));
    setSymbolValid(/\W/.test(password));
  }, [password]);

  useEffect(() => {
    const passCriteria = [
      isLengthValid,
      isUpperValid,
      isLowerValid,
      isDigitValid,
      isSymbolValid,
    ];
    const passValidity = passCriteria.every((criterion) => {
      return criterion;
    });
    setPassVaild(passValidity);
  }, [isLengthValid, isUpperValid, isLowerValid, isDigitValid, isSymbolValid]);

  useEffect(() => {
    setSameValid(password === verify);
  }, [password, verify]);

  useEffect(() => {
    setFormValid(isEmailValid && isPassValid && isPassSame);
  }, [isEmailValid, isPassValid, isPassSame]);

  const handleSubmit = () => {
    //If all fields are valid and this email is not associated with an existing user
    if (isFormValid && !users.find((user) => user.email === email)) {
      const newUser = userFactory(email, password);
      addUser(newUser)
    } else {
      throw new Error("Invalid whatever")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={password}
          type="password"
          onChange={(e) => handleInput("password", e.target.value)}
        ></input>
      </label>
      <label>
        Confirm Password
        <input
          value={verify}
          type="password"
          onChange={(e) => handleInput("verify", e.target.value)}
        ></input>
      </label>
    </form>
  );
};

export default SignUp;
