import itemFactory from "./itemFactory";

const succulentFactory = (id, name, price, tags, imgSrc) => {
  return itemFactory(id, name, price, "succulent", tags, imgSrc);
};

export default succulentFactory;
