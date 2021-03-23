import { Link } from "react-router-dom";

const ItemListing = (props) => {
  const { item } = props;

  return (
    <li key={item.key} className="itemListing">
      <Link to={`/shop/item/${item.id}`}>
        <div>
          <img
            alt={`${item.name}`}
            src={item.imgSrc}
            style={{ maxWidth: "70%"}}
          />
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </Link>
    </li>
  );
};

export default ItemListing;
