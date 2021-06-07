import genId from "generate-unique-id";

const orderFactory = (items, shipping, billing, payment, price, comment, email) => {
  const id = genId();
  const time = new Date()
  return { id: id, items: items, time: time, shipping: shipping, billing: billing, payment:payment, price:price, comment: comment, email: email };
};

export default orderFactory;