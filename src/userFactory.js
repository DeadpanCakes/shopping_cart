import genId from "generate-unique-id";

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
  const wishList = [];
  const userId = genId();
  let isSubscribed = false;

  return {
    id: userId,
    email: email,
    password: password,
    orders: orders,
    wishList: wishList,
    shippingInfo: shippingInfo,
    billingInfo: billingInfo,
    paymentInfo: paymentInfo,
    isSubscribed: isSubscribed
  };
};

export default userFactory;
