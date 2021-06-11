import InfoHero from "./InfoHero";
import deliveryImg from "../../img/shippingBannerFM.jpg";
import heroImg from "../../img/shippingBanner4FM.jpg";
import internationalImg from "../../img/internationalImgFM.jpg";
import processImg from "../../img/processImg2FM.jpg";
import wholesaleImg from "../../img/wholesaleImgFM.png";

const Shipping = () => {
  const mainStyle = {
    minHeight: "100vh",
    maxWidth: "80%",
    marginLeft: "10%",
  };

  const sectionStyle = {
    boxShadow: "10px 10px 0 #1c2f4a",
    margin: "1em 0px 3em 0px",
    padding: 20,
  };

  const textContainerStyle = {
    backgroundColor: "#f0f8ff99",
    minHeight: '200px',
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    textAlign: 'center',
    fontSize: '1.3em',
    textShadow: '0 0 1px #2a2b2a'
  };

  const breakStyle = {
    border: "1px solid black",
    width: "80%",
  }

  return (
    <div>
      <InfoHero img={heroImg} text="Shipping" />
      <main style={mainStyle}>
        <section
          style={{ ...sectionStyle, backgroundImage: `url(${processImg})` }}
        >
          <div style={textContainerStyle}>
            <h1>Our Process</h1>
            <hr style={breakStyle}></hr>
            <p style={{textAlign: 'left'}}>
              Orders typically take about two to seven days to arrive at your
              doorstep. This period of time is split between two phases:
            </p>
            <ul style={{width: '50%', marginLeft: '25%'}}>
              <li>
                <h2>Preparations</h2>
                <p>
                  Voluptatem officia aut delectus aut totam. Velit similique
                  dolores. Earum voluptatem inventore ex non.
                </p>
              </li>
              <li>
                <h2>Packaging</h2>
                <p>
                  Ut quasi commodi illum laboriosam fugiat eum dolorem ut omnis.
                  Non necessitatibus sunt doloremque pariatur minima qui
                  possimus voluptas. Omnis enim dicta ut. Nesciunt officia aut
                  veritatis.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section
          style={{ ...sectionStyle, backgroundImage: `url(${deliveryImg})` }}
        >
          <div style={textContainerStyle}>
            <h1>Our Schedule</h1>
            <hr style={breakStyle}></hr>
            <p>
              Note that we only ship Monday through Wednesday to avoid plants
              being stuck in their boxes over the weekend. This also applies to
              national holidays, when the postal office also takes a break. If
              you prefer not to wait long for your order, placing your order on
              Monday almost ensures that your order will arrive before the week
              ends.
            </p>
          </div>
        </section>
        <section
          style={{ ...sectionStyle, backgroundImage: `url(${wholesaleImg})` }}
        >
          <div style={textContainerStyle}>
            <h1>Wholesale</h1>
            <hr style={breakStyle}></hr>
            <p>
              You may have noticed that we limit orders of individual items to
              20 or fewer. Any order that exceeds this limit should be handled
              wholesale. We do not require any extra paperwork for wholesalers,
              but the process will involve some back and forth to ensure all
              parties are satisfied. Do not hesitate to reach out if you feel
              that your order is sufficient to justify wholesaling-- we are very
              flexible.
            </p>
          </div>
        </section>
        <section
          style={{
            ...sectionStyle,
            backgroundImage: `url(${internationalImg})`,
          }}
        >
          <div style={textContainerStyle}>
          <h1>International Orders</h1>
            <hr style={breakStyle}></hr>
          <p>
            At this time, we are not taking orders of live plants from outside
            the contiguous United States and Canada. We hope to eventually
            expand our operations in the future. You may order nonliving
            products, such as our Custom Gritty Potting Mix or tillandsia
            displays, but understand that we make no guarentees about the
            timeliness of the shipping.
          </p></div>
        </section>
      </main>
    </div>
  );
};
export default Shipping;
