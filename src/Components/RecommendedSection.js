import { useState, useEffect } from "react";
import ItemListing from "./ItemListing";
import useStock from "../items/itemHooks/useStock";

const RecommendedSection = (itemArr) => {
  const stock = useStock();
  const [recommendedItems, setRecommended] = useState([]);

  useEffect(() => {
    if (stock.length > 0) {
      const generateRecommended = (arr) => {
        if (arr.length >= 3) {
          return arr;
        } else {
          const item = stock[Math.floor(Math.random() * stock.length)];
          arr.push(item);
          return generateRecommended(arr);
        }
      };

      const recommendations = generateRecommended([]);
      setRecommended(recommendations);
    }
  }, [stock, itemArr]);

  return (
    <div>
      <ul>
        {recommendedItems.length > 0 ? (
          recommendedItems.map((item) => {
            return (
                <ItemListing key={item.id} item={item} />
            );
          })
        ) : (
          <li>Fetching</li>
        )}
      </ul>
    </div>
  );
};

export default RecommendedSection;
