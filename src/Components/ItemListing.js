import { Link } from "react-router-dom";

const ItemListing = (props) => {
  const { item } = props;

  //Limit string length unless hovered over
  const limitChar = (str) => {
    if (str.length > 10) {
      return str.slice(0,10) + '...'
    }
    return str
  }

  return (
    <li key={item.key} className="itemListing">
      <Link to={`/shop/item/${item.id}`}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img
            alt={`${item.name}`}
            src={item.imgSrc}
            style={{ maxWidth: "70%", borderRadius:'20px', marginBottom: '20px' }}
          />
          <div style={{display:'flex', marginBottom: '10px'}}>
            <h2>{limitChar(item.name)}</h2>
            <h4>${item.price}</h4>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ItemListing;
