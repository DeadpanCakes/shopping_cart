import { useState, useEffect } from "react";
import ItemListing from "./ItemListing";
import useStock from "../items/itemHooks/useStock";

const RecommendedSection = (props) => {
  const stock = useStock();
  const [recommendedItems, setRecommended] = useState([]);
  const { itemArr } = props;

  useEffect(() => {
    if (stock.length > 0) {
      const generateRecommended = (arr, num) => {
        //Added num and extra check to prevent infinite loop if the user would put all items into cart, as a stopgap
        if (arr.length >= 5 || num >=50) {
          return arr;
        }
        const newItem = stock[Math.floor(Math.random() * stock.length)];
        //Push new item if it is not a repeat and the user has not already added the item to the cart or is currently browsing that item's page
        if (
          !(
            arr.includes(newItem) ||
            itemArr.some((item) => item.id === newItem.id)
          )
        ) {
          arr.push(newItem);
        }
        return generateRecommended(arr, num+1);
      };

      const recommendations = generateRecommended([], 0);
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
