import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import contactHero from "../../img/contactBannerFM.jpg";

const Contact = () => {
  const mainStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    marginTop: 40,
  };

  const sectionStyle = {
    width: '80%',
    marginTop: '80px',
    padding: 30,
  }

  const breakStyle = {
    border: "1px solid black",
    width: "80%",
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${contactHero})`,
          width: "100%",
          height: "30vh",
          position: "relative",
        }}
      >
        <h1
          style={{
            position: "absolute",
            bottom: "3%",
            left: "5%",
            color: "aliceblue",
            textShadow: "0 0 5px black",
          }}
        >
          Contact Us
        </h1>
      </div>
      <main style={mainStyle}>
        <form style={{...sectionStyle, backgroundColor: '#507dbc'}}>
          <h1>Send Us A Message</h1>
        <hr style={breakStyle}></hr>
          <p>
            Got questions or feedback? Or maybe you just wanna say thanks? If
            you want a response, remember to leave your email. If you need quick
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
        </form>
        <section style={sectionStyle}>
          <h1>Follow Us</h1>
        <hr style={breakStyle}></hr>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </section>
        <section style={sectionStyle}>
          <h1>Make An Appointment</h1>
        <hr style={breakStyle}></hr>
          <p>
            You can visit us and pick out your own plants or find specimens not
            listed on the site. Just give us a ring to set up an appointment!
          </p>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>+1 (883) 841-2369</p>
          <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
          <p>475 Konopelski Harbors, San Diego, Ca 94516</p>
        </section>
      </main>
      <aside></aside>
    </div>
  );
};

export default Contact;
