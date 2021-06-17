const useCurrency = (items) => {
  const getSubTotal = (items) => {
    const priceArr = items.map((item) => item.price * item.quantity);
    return priceArr.reduce((total, item) => total + item);
  };

  const getTax = (items) => getSubTotal(items) * 0.08;

  const getShipping = (items) => {
    //Shipping cost $5 to start, plus $0.50 for each item after the first; free shipping for orders over 30 dollars before taxes
    if (getSubTotal(items) < 30) {
      const quantityArr = items.map((item) => item.quantity);
      const itemCount = quantityArr.reduce((total, count) => total + count);
      return itemCount * 0.5 + 4.5;
    }
    return 0;
  };
  const getTotalCost = (items) => {
    return getSubTotal(items) + getTax(items) + getShipping(items);
  };
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return {
    getShipping: getShipping,
    getTax: getTax,
    getSubTotal: getSubTotal,
    getTotalCost: getTotalCost,
    formatter: formatter,
  };
};

export default useCurrency;
