import itemFactory from "./itemFactory";

const houseplantFactory = (id, name, price, tagArr) => {
  return itemFactory(id, name, price, "houseplant", tagArr);
};

export default houseplantFactory;