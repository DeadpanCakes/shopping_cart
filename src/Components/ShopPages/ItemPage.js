import { useState, useEffect } from "react";
import stock from "../../items/stockData/stock";
import RecommendedSection from "../RecommendedSection";
import ItemControls from "./ItemControls";
import { CartConsumer } from "../../CartContext";

const ItemPage = (props) => {
  const { id } = props.match.params;
  const [item, setItem] = useState({});
  const itemArr = [item];

  useEffect(() => {
    const fetchItem = (productId) => {
      return stock.items.find((product) => product.id === productId);
    };

    setItem(fetchItem(id));
  }, [id]);

  return (
    <CartConsumer>
      {(cart) => {
        const { items, addItem } = cart;

        return (
          <div className="itemPageContainer">
            <main className="itemPage">
              <img
                alt={item.name}
                src={item.imgSrc}
                className="itemPageImg"
              ></img>
              <div className="itemInfo">
                <div>
                  <h1>{item.name}</h1>
                  <h2>${item.price}.00</h2>
                </div>
                <ItemControls item={item} cart={items} addToCart={addItem} />
              </div>
            </main>
            <RecommendedSection itemArr={itemArr} />
          </div>
        );
      }}
    </CartConsumer>
  );
};

export default ItemPage;
