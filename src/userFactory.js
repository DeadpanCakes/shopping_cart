const userFactory = (
  email,
  password,
  shippingInfo = {
    name: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
  },
  billingInfo = {
    name: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
  },
  paymentInfo = { cardNumber: "", name: "", code: "", expiration: "" }
) => {
  const orders = [];
  const addOrder = (newOrder) => orders.push(newOrder);
  const wishList = [];
  const addWish = (item) => {
    if (!wishList.find(item)) {
      wishList.push(item);
    }
  };
  const changeShipping = (updatedInfo) => (shippingInfo = updatedInfo);
  const changeBilling = (updatedInfo) => (billingInfo = updatedInfo);
  const changePayment = (updatedInfo) => (paymentInfo = updatedInfo);

  return {
    email: email,
    password: password,
    orders: orders,
    wishList: wishList,
    shippingInfo: shippingInfo,
    billingInfo: billingInfo,
    paymentInfo: paymentInfo,
  };
};

export default userFactory;
