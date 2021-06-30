import { UserConsumer } from "../../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import InfoHero from "./InfoHero";
import contactHero from "../../img/contactBannerFM.jpg";
import nurseryImg from "../../img/nursery3.jpg";
import nursery2Img from "../../img/nursery2.jpg";
import SocialMedia from "../SocialMedia";
import ContactForm from "./ContactForm";
import RecommendedSection from "../RecommendedSection";

const Contact = () => {
  const mainStyle = {
    minHeight: "80vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    columnGap: "3em",
    justifyContent: "space-around",
    margin: "40px 40px 120px 40px",
  };

  const sectionStyle = {
    padding: 15,
    boxShadow: "10px 10px 0 #1c2f4a",
    backgroundColor: "#507dbc",
    color: "#2a2b2a",
  };

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser } = user;

        return (
          <div style={{ marginBottom: 80 }}>
            <InfoHero img={contactHero} text="Contact Us" />
            <main style={mainStyle}>
              <section
                style={{
                  ...sectionStyle,
                  backgroundColor: "#507dbc",
                  alignSelf: "start",
                }}
              >
                <div style={{ backgroundColor: "#f0f8ff95", padding: 15 }}>
                  <h1>Send Us A Message</h1>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <ContactForm loggedUser={loggedUser} />
                      <p
                        style={{
                          flex: "1",
                          textAlign: "center",
                          padding: 10,
                          fontSize: "1.3em",
                        }}
                      >
                        Got questions or feedback? Or maybe you just wanna say
                        thanks? If you want a response, remember to leave your
                        email. If you need quick answers, be sure to check our
                        FAQ.
                      </p>
                  </div>
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
                <div style={{ backgroundColor: "#f0f8ff95", padding: 15 }}>
                  <div style={{ display: "flex" }}>
                    <h1>Follow Us</h1>
                    <SocialMedia size="4x" isDark={false} />
                  </div>
                  <p style={{ fontSize: "1.3em" }}>
                    Keep yourself on updated on new, rare, or fast-selling
                    stock! Participate in exclusive deals and giveaways!
                  </p>
                </div>
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
                <img
                  alt="Our nursery"
                  src={nursery2Img}
                  style={{ maxWidth: 900 }}
                />
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
              <section
                style={{
                  ...sectionStyle,
                  alignSelf: "end",
                  display: "flex",
                  backgroundImage: `url(${nurseryImg})`,
                }}
              >
                <div style={{ backgroundColor: "#f0f8ff95", padding: 15 }}>
                  <div style={{ flex: 2 }}>
                    <h1>Visit Us</h1>
                    <p style={{ fontSize: "1.3em" }}>
                      You can visit us and pick out your own plants or find
                      specimens not listed on the site. Just give us a ring to
                      set up an appointment!
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
                    <p style={{ fontSize: "1.3em" }}>+1 (883) 841-2369</p>
                    <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                    <p style={{ fontSize: "1.3em" }}>
                      475 Konopelski Harbors, San Diego, Ca 94516
                    </p>
                  </div>
                </div>
              </section>
            </main>
            <div style={{ width: "80vw", marginLeft: "10vw" }}>
              <RecommendedSection itemArr={[]} />
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default Contact;
