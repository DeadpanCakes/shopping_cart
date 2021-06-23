import { Link } from "react-router-dom";
import ItemListing from "../ItemListing";
import ItemCarousel from "./ItemCarousel";

const PageSection = (props) => {
  const { name, category, link, bannerImg } = props;

  const categoryStyle = {
    display: "flex",
  };

  const Banner = (props) => {
    return (
      <Link
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          alignSelf: "flex-end",
          color: "white",
          maxHeight: 48,
        }}
        to={link}
        className="banner"
      >
        <div className="bannerBorder"></div>
        <img src={props.src} alt={`${name}`}></img>
        <h2 className="bannerText">{`Shop ${name}`}</h2>
        <div className="bannerBorder"></div>
      </Link>
    );
  };

  return (
    <div className="shopSections">
      <div style={categoryStyle}>
        <ItemCarousel pages={Math.ceil(category.length/8)}>
          {category.map((item) => (
            <ItemListing key={item.id} item={item} />
          ))}
        </ItemCarousel>
      </div>
      <Banner src={bannerImg} />
    </div>
  );
};

export default PageSection;
