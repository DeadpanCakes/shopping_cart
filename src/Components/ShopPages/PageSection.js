import { Link } from "react-router-dom";
import ItemListing from "../ItemListing";

const PageSection = (props) => {
  const { name, category, link, bannerImg } = props;

  const categoryStyle = {
    display: "flex",
  };

  const borderDiv = {
    minHeight: '3px',
    backgroundColor: 'black',
    borderTop: '1px solid gray'
  }

  const Banner = (props) => {
    return (
      <Link
        style={{ display: 'flex', flexDirection: 'column', position: "relative", width: "100%", alignSelf: "flex-end", color: 'white', maxHeight: 48 }}
        to={link}
        className='banner'
      >
        <div className='bannerBorder'></div>
        <img src={props.src} alt={`${name}`}></img>
        <h2 className='bannerText'>{`See All ${name}`}</h2>
        <div className='bannerBorder'></div>
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
      <Banner src={bannerImg} />
    </div>
  );
};

export default PageSection;
