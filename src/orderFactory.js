import genId from "generate-unique-id";

const orderFactory = (items, time, shipping, billing, payment) => {
  const id = genId();
  return { id, items, time, shipping, billing, payment };
};

export default orderFactory;