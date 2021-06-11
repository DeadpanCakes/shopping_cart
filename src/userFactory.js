const userFactory = (email, password) => {
  const orders = [];
  const addOrder = (newOrder) => orders.push(newOrder);
  const wishList = [];
  const addWish = (item) => {
    if (!wishList.find(item)) {
      wishList.push(item);
    }
  };
  return {
    email: email,
    password: password,
    orders: orders,
    addOrder: addOrder,
    wishList: wishList,
    addWish: addWish,
  };
};

export default userFactory;
