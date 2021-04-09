import { useState, useEffect } from "react";
import ItemListing from "./ItemListing";
import useStock from "../items/itemHooks/useStock";

const RecommendedSection = (itemArr) => {
  const stock = useStock();
  const [recommendedItems, setRecommended] = useState([]);

  useEffect(() => {
    if (stock.length > 0) {
      const generateRecommended = (arr) => {
        if (arr.length >= 5) {
          return arr;
        }
        const item = stock[Math.floor(Math.random() * stock.length)];
        if (!arr.includes(item)) {
          arr.push(item);
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
