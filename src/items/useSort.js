import { useState, useEffect } from "react";

const useSort = (stock, criteria) => {
  const [sortedStock, setSortedStock] = useState([]);

  useEffect(() => {
    const sortByPrice = (items) => {
      [...items].sort((prevItem, item) => prevItem.price - item.price);
    };

    const revSortByPrice = (items) =>
      [...items].sort((prevItem, item) => item.price - prevItem.price);

    const sortByAlpha = (items) => {
      const sorted = [...items].sort((prevItem, item) => {
        if (prevItem.name > item.name) {
          return 1;
        } else if (prevItem.name < item.name) {
          return -1;
        } else {
          return 0;
        }
      });
      return sorted
    };

    const revSortByAlpha = (items) => {
      return [...items].sort((prevItem, item) => {
        if (prevItem.name < item.name) {
          return 1;
        } else if (prevItem.name < item.name) {
          return -1;
        }
        return 0;
      });
    };

    const sortById = (items) =>
      [...items].sort((prevItem, item) => prevItem.key - item.key);

    switch (criteria) {
      case "price":
        setSortedStock(sortByPrice(stock));
        break;
      case "revPrice":
        setSortedStock(revSortByPrice(stock));
        break;
      case "alpha":
        setSortedStock(sortByAlpha(stock));
        break;
      case "revAlpha":
        setSortedStock(revSortByAlpha(stock));
        break;
      default:
        setSortedStock(sortById(stock));
        break;
    }
  }, [criteria, stock]);
  return sortedStock;
};

export default useSort;
