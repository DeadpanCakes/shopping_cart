import itemFactory from "./itemFactory";

const succulentFactory = (id, name, price, tagArr, imgSrc) => {
  return itemFactory(id, name, price, "succulent", tagArr, imgSrc);
};

export default succulentFactory;
