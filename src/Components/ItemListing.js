import { Link } from "react-router-dom";

const ItemListing = (props) => {
  const { item } = props;

  const styling = {
    margin: "5px",
    backgroundColor: "#CFDBD5",
    listStyle: "none",
  };

  return (
    <li key={item.key} style={styling}>
      <Link to={`/shop/item/${item.id}`}>
        <img alt={`${item.name}`} src={item.imgSrc} />
        <h2>{item.name}</h2>
        <h4>${item.price}</h4>
      </Link>
    </li>
  );
};

export default ItemListing;
