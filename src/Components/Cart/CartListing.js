import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'


const CartListing = (props) => {
  const {
    item,
    removeItem,
    handleInput,
    incrementQuantity,
    decrementQuantity,
  } = props;
  const { id, name, price, quantity } = item;

  const imgStyle = { maxHeight: 100, maxWidth: 100};
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  };
  const inputStyle = { width: 50 };
  const controlStyle = { marginRight: 50 };
  return (
    <li style={containerStyle} class='cartListing'>
      <Link to={`/shop/item/${id}`} style={{flex: 1, marginLeft: 10}} className="itemLink">
        <img alt={name} src={item.imgSrc} style={imgStyle} />
        <h2>{name}</h2>
      </Link>
      <form name={id} onSubmit={(e) => e.preventDefault()} style={controlStyle}>
        <button onClick={decrementQuantity}>-</button>
        <input
          name="quantity"
          value={item.quantity}
          onChange={handleInput}
          style={inputStyle}
        />
        <button onClick={incrementQuantity}>+</button>
        <button onClick={() => removeItem(item)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </form>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 100, minWidth: 100 }}>
        <p>Price: ${price}</p>
        <p>Total: ${price * quantity}</p>
      </div>
    </li>
  );
};

export default CartListing;
