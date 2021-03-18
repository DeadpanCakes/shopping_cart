import itemFactory from "./itemFactory";

const houseplantFactory = (id, name, price, tagArr, imgSrc) => {
  return itemFactory(id, name, price, "houseplant", tagArr, imgSrc);
};

export default houseplantFactory;