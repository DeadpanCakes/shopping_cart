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
        style={{ position: "relative", width: "100%", alignSelf: "flex-end", color: 'white' }}
        to={link}
        className='banner'
      >
        <img src={props.src} alt={props.alt}></img>
        <h2 className='bannerText'>{`See All ${name}`}</h2>
      </Link>
    );
  };

  return (
    <div className="shopSections">
      <h2>{name}</h2>
      <div style={categoryStyle}>
        {category.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <Banner src={bannerImg} alt="test" />
    </div>
  );
};

export default PageSection;
