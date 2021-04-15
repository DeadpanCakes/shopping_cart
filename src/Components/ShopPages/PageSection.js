import {Link} from 'react-router-dom';
import ItemListing from '../ItemListing';

const PageSection = (props) => {
  const { name, category, link, bannerImg } = props;

  const categoryStyle = {
    display: "flex",
    flexWrap: "nowrap",
  };

  const Banner = (props) => {
    return (<img src={props.src} alt={props.alt}></img>)
  }

  return (
    <div className="shopSections">
      <h2>{name}</h2>
      <div style={categoryStyle}>
        {category.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <Link
        style={{ width: '100%', alignSelf: "flex-end" }}
        to={link}
      >
          <Banner src={bannerImg} alt='test' />
          {`See All ${name}`}
          </Link>
    </div>
  );
};

export default PageSection;
