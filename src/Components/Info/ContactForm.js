import { useState } from "react";

const ContactForm = (props) => {
  const { loggedUser } = props;

  const [email, setEmail] = useState(loggedUser ? loggedUser.email : "");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => handleInput("email", e.target.value)}
      ></input>
      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => handleInput("subject", e.target.value)}
      ></input>
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => handleInput("message", e.target.value)}
      ></textarea>
    </form>
  );
};

export default ContactForm;
