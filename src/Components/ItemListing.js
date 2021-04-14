import { Link } from "react-router-dom";
import { CartConsumer } from "../CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemListing = (props) => {
  const { item } = props;

  const limitChar = (str) => {
    if (str.length > 10) {
      return str.slice(0, 10) + "...";
    }
    return str;
  };

  return (
    <CartConsumer>
      {(cart) => {
        return (
          <Link to={`/shop/item/${item.id}`} className="itemLink">
            <li key={item.key} className="itemListing">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="listingImgContainer">
                  <img
                    alt={`${item.name}`}
                    src={item.imgSrc}
                    className="itemListingImg"
                  />
                  {Array.isArray(cart.items) ? (
                    cart.items.some(
                      (cartedItem) => item.id === cartedItem.id
                    ) ? (
                      <div className="inCartIconContainer">
                        <p>In Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </div>
                    ) : null
                  ) : null}
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <h2>{limitChar(item.name)}</h2>
                  <h4>${item.price}</h4>
                </div>
              </div>
            </li>
          </Link>
        );
      }}
    </CartConsumer>
  );
};

export default ItemListing;
