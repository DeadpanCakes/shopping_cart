import { Fragment } from "react";

const CheckoutPage = (props) => {
    const total = props.getwithtax
  return (
    <Fragment>
      <main></main>
      <aside><h1>Total: {total}</h1></aside>
    </Fragment>
  );
};

export default CheckoutPage;
