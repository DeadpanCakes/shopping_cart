import { Fragment } from "react";

const CheckoutListing = (props) => {
  const { items } = props;

  return (
    <li>
      {items.map((item) => {
        return (
          <>
            <img src={item.imgSrc} alt={`A(n) ${item.name}`}></img>
            <h3>{`${item.quantity}x ${item.name}`}</h3>
            <h2>{`$${item.quantity * item.price}`}</h2>
          </>
        );
      })}
    </li>
  );
};

export default CheckoutListing;
