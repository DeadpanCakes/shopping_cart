import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DropDownListing = (props) => {
  const { item, removeItem } = props;

  const imgStyle = {
    maxWidth: 75,
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  };

  return (
    <li style={containerStyle} className='dropdownListing'>
      <Link to={`/shop/item/${item.id}`} className='dropdownListing' style={{flexGrow: 1}}>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <img
            alt={`A(n) ${item.name}`}
            src={item.imgSrc}
            style={imgStyle}
          ></img>
          <h2 style={{textDecoration: 'none'}}>${item.price}</h2>
          <h3 style={{ alignSelf: "center", marginLeft: 10 }}>{item.name}</h3>
        </div>{" "}
      </Link>
      <button onClick={() => removeItem(item)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default DropDownListing;
