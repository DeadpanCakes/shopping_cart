import { Link } from "react-router-dom";
import heroImg from "../../img/aboutBannerFM.jpg";
import storyImg from "../../img/aboutImg1.webp";
import missionImg from "../../img/aboutImg2.webp";
import RecommendedSection from "../RecommendedSection";
import nurseryImg from "../../img/nursery1.png";

const About = () => {
  const mainStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  };

  const bannerStyle = {
    width: "100%",
    maxHeight: 400,
    minHeight: 400,
    position: "relative",
    backgroundImage: `url(${heroImg})`,
  };

  const heroText = {
    position: "absolute",
    left: "6%",
    bottom: "8%",
    color: "white",
  };

  const sectionStyle = {
    width: "86vw",
    marginLeft: "7vw",
    padding: "40px",
  };

  const breakStyle = {
    border: "1px solid black",
    width: "80%",
  };

  const titleStyle = {
    textAlign: "center",
  };

  const textStyle = {
    fontSize: "1.3em",
  };

  return (
    <div>
      <div style={bannerStyle}>
        <div style={heroText}>
          <h1>About Us</h1>
        </div>
      </div>
      <main style={mainStyle}>
        <div
          style={{
            ...sectionStyle,
            backgroundColor: "#f6c7c7",
            marginBottom: 80,
            backgroundImage: `url(${storyImg})`,
            boxShadow: "10px 10px 0 #1c2f4a",
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f8ff95",
              padding: 10,
            }}
          >
            <h1 style={titleStyle}>Our Story</h1>
            <hr style={breakStyle}></hr>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ ...textStyle, width: "50%", padding: 30 }}>
                Mollitia illo voluptatem tempore voluptatem. Molestiae dolorem
                nostrum cum. Ut unde explicabo totam id consequuntur quae non.
                Est sit sunt sed exercitationem. Cumque ad eum molestiae qui non
                aut. Laudantium culpa dolor ipsa quaerat ipsum blanditiis quia
                dignissimos alias. Dolor impedit praesentium optio fugiat
                excepturi quas quis et. Ut id eveniet quisquam vitae earum non
                aperiam culpa. Vitae beatae et nisi ducimus qui vel aut. Qui
                earum quidem assumenda est dolorem animi. Dolores cupiditate
                corporis ut nemo et quis autem ipsa. Et quo voluptatibus qui
                perspiciatis qui dolores voluptas minus.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            ...sectionStyle,
            backgroundColor: "#f6c7c7",
            marginBottom: 80,
            backgroundImage: `url(${missionImg})`,
            boxShadow: "10px 10px 0 #1c2f4a",
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f8ff95",
              padding: 20,
            }}
          >
            <h1 style={{ textAlign: "center" }}>Our Mission Statement</h1>
            <hr style={breakStyle}></hr>
            <p style={textStyle}>
              Rem architecto libero magni sint non nihil. Animi saepe
              consequatur dolores impedit enim rerum molestiae perferendis at.
              Sunt quis repudiandae vero aut. Eos qui beatae qui quaerat est. Et
              facere est eos officiis adipisci amet magnam.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "#507dbc" }}>
          <div
            style={{
              ...sectionStyle,
              display: "flex",
              padding: 20,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
              <h1>Visit Us</h1>
              <p>
                If you're in the San Diego area, you can see for yourself what
                makes us different. Visit our nursery, where you can pick out
                plants yourself and find other specimens we don't offer on the
                site. Normally, we are open to the public, but for the safety of
                our workers and visitors, we are only taking people who have
                appointments to limit contact until further notice.
              </p>
              <Link to="/contact" style={{ alignSelf: "center", margin: 10 }}>
                <button style={{}} className="contactBtn">
                  Schedule An Appointment
                </button>
              </Link>
            </div>
            <img
              alt="Our nursery"
              src={nurseryImg}
              style={{ flex: 1, width: 500, boxShadow: "10px 10px 0 #1c2f4a" }}
            />
          </div>
        </div>
      </main>
      <RecommendedSection itemArr={[]} />
    </div>
  );
};

export default About;
