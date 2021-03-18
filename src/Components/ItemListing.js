import { Link } from "react-router-dom";

const ItemListing = (props) => {
  const { item } = props;

  const styling = {
    padding: '10px',
    margin: "5px",
    backgroundColor: "#CFDBD5",
    listStyle: "none",
    maxWidth: '100px',
    borderRadius: '10px'
  };

  return (
    <li key={item.key} style={styling}>
      <Link to={`/shop/item/${item.id}`}>
        <img alt={`${item.name}`} src={item.imgSrc} style={{maxWidth:'100px'}} />
        <h2>{item.name}</h2>
        <h4>${item.price}</h4>
      </Link>
    </li>
  );
};

export default ItemListing;
