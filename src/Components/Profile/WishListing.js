import { Link } from "react-router-dom";

const WishListing = (props) => {
  const { item, removeWish, addToCart } = props;
  const { id, imgSrc, name, price } = item;

  const listingStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0"
  };
  const imgStyle = {
    maxHeight: 100,
  };
  return (
    <li style={listingStyle} className="wishListing">
      <Link to={`/shop/item/${id}`} style={{display :'flex', flex: 1}} className='itemLink'>
        <img src={imgSrc} alt={`A ${name}`} style={imgStyle}></img>
        <h2>{name}</h2>
      </Link>
      <p style={{
        fontSize: '1.3em',
        flexShrink: 1,
        margin: '10px 10px 0 0'
      }}>${price}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={removeWish}>Remove</button>
        <button onClick={addToCart}>Add</button>
      </div>
    </li>
  );
};

export default WishListing;
