import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const mainStyle = {
    height: "100vh",
  };

  return (
    <div>
      <main style={mainStyle}>
        <h1>Contact</h1>
        <h2>Send Us A Message</h2>
        <p>
          Got questions or feedback? Or maybe you just wanna say thanks? If you
          want a response, remember to leave your email. If you need quick
          answers, be sure to check our FAQ.
        </p>
        <label>
          Email<input></input>
        </label>
        <label>
          Subject<input></input>
        </label>
        <label>
          <textarea></textarea>
        </label>
        <h2>Make An Appointment</h2>
        <p>
          You can visit us and pick out your own plants or find specimens not
          listed on the site. Just give us a ring to set up an appointment!
        </p>
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        <p>+1 (883) 841-2369</p>
        <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
        <p>475 Konopelski Harbors, San Diego, Ca 94516</p>
        <h2>Find Us At:</h2>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </main>
      <aside></aside>
    </div>
  );
};

export default Contact;
