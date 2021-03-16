const itemFactory = (id, name, price, category, tagArr) => {
  return {
    id,
    name,
    price,
    category,
    tagArr,
  };
};

export default itemFactory;
