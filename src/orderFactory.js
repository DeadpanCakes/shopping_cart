import genId from "generate-unique-id";

const orderFactory = (items, shipping, billing, payment) => {
  const id = genId();
  const time = new Date()
  return { id: id, items: items, time: time, shipping: shipping, billing: billing, payment:payment };
};

export default orderFactory;