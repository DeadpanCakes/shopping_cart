import { useState, useEffect } from "react";
import { UserConsumer } from "../../UserContext";
import LabeledInput from "../FormComponents/LabeledInput";
import ValidatiedInput from "../FormComponents/ValidatedInput";

const ContactForm = (props) => {
  const { loggedUser } = props;

  const [email, setEmail] = useState(loggedUser ? loggedUser.email : "");
  const [isEmailValid, setEmailValid] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEmailValid(/^[\w.]+[@][\w-.]+[.][\S]+$/gm.test(email));
  }, [email]);

  const handleInput = (field, value) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        console.log(value);
        break;
    }
  };

  return (
    <UserConsumer>
      {(user) => {
        return (
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ValidatiedInput
              label="Email"
              value={email}
              inputHandler={setEmail}
              isValid={isEmailValid}
            />
            <LabeledInput
              label="Subject"
              value={subject}
              inputHandler={setSubject}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => handleInput("message", e.target.value)}
            ></textarea>
          </form>
        );
      }}
    </UserConsumer>
  );
};

export default ContactForm;
