const itemFactory = (key, name, price, category, tagArr) => {
  return {
    get id() {
      return name.slice(0,3) + key
    },
    key,
    name,
    price,
    category,
    tagArr,
  };
};

export default itemFactory;
