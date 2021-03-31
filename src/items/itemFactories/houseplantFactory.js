import itemFactory from "./itemFactory";

const houseplantFactory = (id, name, price, tags, imgSrc) => {
  return itemFactory(id, name, price, "houseplant", tags, imgSrc);
};

export default houseplantFactory;