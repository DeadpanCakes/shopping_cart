import { useState, useEffect } from "react";
import stock from "../../items/stockData/stock";
import RecommendedSection from "../RecommendedSection";
import ItemControls from "./ItemControls";

const ItemPage = (props) => {
  const { id } = props.match.params;
  const { cart, addToCart, updateQuantity } = props;
  const [item, setItem] = useState({})

  console.log('reached', item)

  useEffect(() => {
    const fetchItem = (productId) => {
      return stock.items.find((product) => product.id === productId);
    };

    setItem(fetchItem(id));
  }, [id]);

  return (
    <div className="itemPageContainer">
      <main className="itemPage">
        <img alt={item.name} src={item.imgSrc} className="itemPageImg"></img>
        <div className="itemInfo">
          <h1>{item.name}</h1>
          <h2>${item.price}.00</h2>
          <ItemControls
            item={item}
            cart={cart}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
          />
        </div>
      </main>
      <RecommendedSection itemArr={[item]} />
    </div>
  );
};

export default ItemPage;
