import { useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([
    {
      payment: {
        cardNumber: "1234567890123",
        name: "0",
        expire: "06/10",
        code: "123",
      },
      billing: {
        address: "1",
        city: "",
        country: "1",
        name: "1",
        phone: "",
        zip: "",
      },
      id: "wg79f6unrnbld1x5u97k",
      items: [
        {
          category: "tillandsia",
          id: "Bra9",
          imgSrc: "/static/media/brachy.10b02928.png",
          key: 9,
          name: "Brachycaulos",
          price: 2,
          quantity: 1,
          tags: {
            color: ["Green", "Red", "Color-Changing"],
            growth: [],
            light: [],
            other: [],
            propagation: [],
            water: ["Drought-Resistant"],
          },
        },
      ],
      shipping: {
        address: "1",
        city: "",
        country: "1",
        name: "1",
        phone: "",
        zip: "",
      },
      time: new Date(),
    },
  ]);
  const addOrder = (newOrder) => {
    setOrders((prevOrders) => {
      return [newOrder, ...prevOrders];
    });
  };

  return { orders, addOrder };
};

export default useOrders;
