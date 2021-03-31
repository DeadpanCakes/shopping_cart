import { useState, useEffect } from "react";
import fullStock from "../stockData/stock";

const useStock = (category) => {
  //Was in ShopPage
  const [stock, setStock] = useState([]);

  useEffect(() => {
    //End of StorNav Logic
    switch (category) {
      case "Houseplants":
        setStock(fullStock.houseplants);
        break;
      case "Succulents":
        setStock(fullStock.succulents);
        break;
      case "Tillandsia":
        setStock(fullStock.tillandsia);
        break;
      case "Supplies":
        setStock(fullStock.supplies);
        break;
      default:
        setStock(fullStock.items);
        break;
    }
  }, [category]);

  return stock
};

export default useStock;
