import { useState, useEffect } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const addOrder = (newOrder) => {
    setOrders((prevOrders) => {
      return [newOrder, ...prevOrders];
    });
  };

  useEffect(() => {
    if (window.localStorage.getItem("orders")) {
      setOrders(JSON.parse(window.localStorage.getItem("orders")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return { orders, addOrder };
};

export default useOrders;
