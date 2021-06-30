import { Link } from "react-router-dom";

const WishListing = (props) => {
  const { item, removeWish, addToCart } = props;
  const { id, imgSrc, name, price } = item;

  const listingStyle = {
    display: "flex",
  };
  const imgStyle = {
    maxHeight: 100,
  };
  return (
    <li style={listingStyle}>
      <Link to={`/shop/item/${id}`} style={{display :'flex'}} className='itemLink'>
        <img src={imgSrc} alt={`A ${name}`} style={imgStyle}></img>
        <h2>{name}</h2>
      </Link>
      <p>{price}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={removeWish}>Remove</button>
        <button>Add</button>
      </div>
    </li>
  );
};

export default WishListing;
