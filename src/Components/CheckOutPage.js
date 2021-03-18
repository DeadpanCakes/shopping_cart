import { Fragment } from "react";
import ItemListing from "./ItemListing";

const CheckoutPage = (props) => {
  const { cart } = props;
  const getSubTotal = () => {
    const priceArr = cart.map((item) => item.price * item.quantity);
    return priceArr.reduce((total, item) => total + item);
  };

  const getTax = () => getSubTotal() * .08;

  const getShipping = () => {
    //Shipping cost $5 to start, plus $0.50 for each item after the first; free shipping for orders over 30 dollars before taxes
    if (getSubTotal() < 30) {
      const quantityArr = cart.map((item) => item.quantity);
      const itemCount = quantityArr.reduce((total, count) => total + count);
      return itemCount * 0.5 + 4.5;
    }
    return 0;
  };
  const getTotalCost = () => {
    return getSubTotal() + getTax() + getShipping();
  };
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-nd'}}>
      <main style={{marginRight:'50%'}}>
        {cart.map((item) => {
          return <li style={{display:'flex', flexDirection: 'row'}}>
            <ItemListing item={item} /> 
            <div>
            <h2>x{item.quantity}</h2>
            <h2>${item.price * item.quantity}</h2>
            </div>
          </li>
        })}
      </main>
      <aside>
        <h3>Subtotal: {formatter.format(getSubTotal())}</h3>
        <h3>Taxes: {formatter.format(getTax())}</h3>
        <h3>Shipping: {formatter.format(getShipping())}</h3>
        <h1>Total: {formatter.format(getTotalCost())}</h1>
      </aside>
    </div>
  );
};

export default CheckoutPage;
