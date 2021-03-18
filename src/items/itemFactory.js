const itemFactory = (key, name, price, category, tagArr, imgSrc) => {
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
