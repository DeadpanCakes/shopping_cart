import genId from "generate-unique-id";

const orderFactory = (items, shipping, billing, payment, price, comment) => {
  const id = genId();
  const time = new Date()
  return { id: id, items: items, time: time, shipping: shipping, billing: billing, payment:payment, price:price, comment: comment };
};

export default orderFactory;