import { useState, useEffect } from "react";
import ItemListing from "./ItemListing";
import useStock from "../items/itemHooks/useStock";

const RecommendedSection = (props) => {
  const stock = useStock();
  const [recommendedItems, setRecommended] = useState([]);
  const {itemArr} = props

  useEffect(() => {
    if (stock.length > 0) {
      const generateRecommended = (arr) => {
        if (arr.length >= 5) {
          return arr;
        }
        const newItem = stock[Math.floor(Math.random() * stock.length)];
        if (!(arr.includes(newItem) || itemArr.some(item => item.id === newItem.id))) {
          arr.push(newItem);
        }
        return generateRecommended(arr);
      };

      const recommendations = generateRecommended([]);
      setRecommended(recommendations);
    }
  }, [stock, itemArr]);

  return (
    <div className="recommendationsContainer">
      <h2>Recommendations</h2>
      <ul className="recommendations">
        {recommendedItems.length > 0 ? (
          recommendedItems.map((item) => {
            return <ItemListing key={item.id} item={item} />;
          })
        ) : (
          <li>Fetching</li>
        )}
      </ul>
    </div>
  );
};

export default RecommendedSection;
