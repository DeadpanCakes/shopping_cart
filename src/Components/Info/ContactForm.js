import { useState, useEffect } from "react";
import LabeledInput from "../FormComponents/LabeledInput";
import ValidatiedInput from "../FormComponents/ValidatedInput";
import Notification from "../Generic/Notification";

const ContactForm = (props) => {
  const { loggedUser } = props;

  const [email, setEmail] = useState(loggedUser ? loggedUser.email : "");
  const [isEmailValid, setEmailValid] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageValid, setMessageValid] = useState(false);
  const [notificationData, setNotification] = useState({});

  const clearFields = () => {
    setEmail(loggedUser ? loggedUser.email : "");
    setSubject("");
    setMessage("");
  };

  const clearNotification = () => {
    setNotification({});
  };

  useEffect(() => {
    setEmailValid(/^[\w.]+[@][\w-.]+[.][\S]+$/gm.test(email));
  }, [email]);

  useEffect(() => {
    setMessageValid(/[\S]+/.test(message));
  }, [message]);

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

  const handleSubmit = () => {
    if (isEmailValid && isMessageValid) {
      clearFields();
      setNotification({
        text: "Message Sent! If you are expecting a response, you will be emailed within 1-3 days!",
        type: "confirmation",
      });
      setTimeout(clearNotification, 2500);
    } else {
      setNotification({
        text: "Something went wrong. Please check your email and make sure you have written a message.",
        type: "error",
      });
      setTimeout(clearNotification, 2500);
    }
  };

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
      <LabeledInput label="Subject" value={subject} inputHandler={setSubject} />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => handleInput("message", e.target.value)}
      ></textarea>
      <button
        style={{ alignSelf: "flex-end" }}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Send
      </button>
      {notificationData.text ? (
        <Notification
          message={notificationData.text}
          notificationType={notificationData.type}
          miscStyle={{
            position: "fixed",
            bottom: "5%",
            left: "35%",
            zIndex: 1,
          }}
        />
      ) : null}
    </form>
  );
};

export default ContactForm;
