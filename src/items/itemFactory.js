import placeHolderImg from './images/placeholder.png';

const itemFactory = (key, name, price, category, tagArr, imgSrc = placeHolderImg) => {
  return {
    get id() {
      return name.slice(0,3) + key
    },
    key,
    name,
    price,
    category,
    tagArr,
    imgSrc
  };
};

export default itemFactory;
