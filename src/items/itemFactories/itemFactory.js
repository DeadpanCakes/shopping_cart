import placeHolderImg from '../images/placeholder.png';

const itemFactory = (key, name, price, category, tags = {all:[]}, imgSrc = placeHolderImg) => {
  return {
    get id() {
      return name.slice(0,3) + key
    },
    key,
    name,
    price,
    category,
    tags,
    imgSrc
  };
};

export default itemFactory;
