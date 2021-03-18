import { Fragment } from "react";

const CheckoutPage = (props) => {
  const { cart } = props;
  const totalCost = (() => {
      const priceArr = cart.map(item=> item.price*item.quantity)
      const subTotal = priceArr.reduce((total, item) => total+item)
      const tax = subTotal / 10
      const shipping = 8
      const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
      })
      return formatter.format(subTotal + tax + shipping)
  })()
  return (
    <Fragment>
      <main></main>
      <aside>
        <h1>Total: {totalCost}</h1>
      </aside>
    </Fragment>
  );
};

export default CheckoutPage;
