import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import contactHero from "../../img/contactBannerFM.jpg";
import nurseryImg from "../../img/nursery2.jpg";
import SocialMedia from '../SocialMedia';
import ContactForm from "./ContactForm";

const Contact = () => {
  const mainStyle = {
    minHeight: "80vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    columnGap: "3em",
    justifyContent: "space-around",
    margin: 40,
  };

  const sectionStyle = {
    padding: 30,
    boxShadow: "10px 10px 0 #1c2f4a",
    backgroundColor: "#507dbc",
    color: "aliceblue",
  };

  return (
    <div style={{marginBottom: 30}}>
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
        <section
          style={{
            ...sectionStyle,
            backgroundColor: "#507dbc",
            alignSelf: "start",
          }}
        >
          <h1>Send Us A Message</h1>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <ContactForm />
            <p style={{ flex: "1", textAlign: "center" }}>
              Got questions or feedback? Or maybe you just wanna say thanks? If
              you want a response, remember to leave your email. If you need
              quick answers, be sure to check our FAQ.
            </p>
          </div>
        </section>
        <section
          style={{
            ...sectionStyle,
            alignSelf: "end",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <h1>Follow Us</h1>
            <SocialMedia size='4x' />
          </div>
          <p>
            Keep yourself on updated on new, rare, or fast-selling stock!
            Exclusive deals and contests!
          </p>
        </section>
        <div
          style={{
            ...sectionStyle,
            alignSelf: "center",
            justifySelf: "center",
            padding: 0,
            position: "relative",
            maxHeight: 300,
          }}
        >
          <img alt="Our nursery" src={nurseryImg} style={{ maxWidth: 900 }} />
          <h2
            style={{
              position: "absolute",
              left: "10%",
              bottom: "10%",
              color: "#2a2b2a",
              backgroundColor: "#f0f8ff98",
              padding: 10,
            }}
          >
            See What Makes Us Different For Yourself
          </h2>
        </div>
        <section style={{ ...sectionStyle, alignSelf: "end", display: "flex" }}>
          <div style={{ flex: 2 }}>
            <h1>Visit Us</h1>
            <p>
              You can visit us and pick out your own plants or find specimens
              not listed on the site. Just give us a ring to set up an
              appointment!
            </p>
          </div>
          <div
            style={{
              display: "grid",
              flex: 1,
              alignItems: "end",
              gridTemplateColumns: "10% 90%",
            }}
          >
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <p>+1 (883) 841-2369</p>
            <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
            <p>475 Konopelski Harbors, San Diego, Ca 94516</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
