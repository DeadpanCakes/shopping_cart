import { Link } from "react-router-dom";
import ItemListing from "../ItemListing";

const PageSection = (props) => {
  const { name, category, link, bannerImg } = props;

  const categoryStyle = {
    display: "flex",
  };

  const Banner = (props) => {
    return (
      <Link
        style={{ display: 'flex', flexDirection: 'column', position: "relative", width: "100%", alignSelf: "flex-end", color: 'white', maxHeight: 48 }}
        to={link}
        className='banner'
      >
        <img src={props.src} alt={`${name}`}></img>
        <h2 className='bannerText'>{`Shop ${name}`}</h2>
      </Link>
    );
  };

  return (
    <div className="shopSections">
      <div style={categoryStyle}>
        {category.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <Banner src={bannerImg} />
    </div>
  );
};

export default PageSection;
