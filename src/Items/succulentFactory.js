import itemFactory from "./itemFactory";

const succulentFactory = (id, name, price, tagArr) => {
  return itemFactory(id, name, price, "succulent", tagArr);
};

export default succulentFactory;
