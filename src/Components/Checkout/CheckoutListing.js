const CheckoutListing = (props) => {
  const { item } = props;

  return (
    <li style={{display: 'flex', height: '70px'}}>
      <img src={item.imgSrc} alt={`A(n) ${item.name}`}></img>
      <h3>{`${item.quantity}x ${item.name}`}</h3>
      <h2>{`$${item.quantity * item.price}`}</h2>
    </li>
  );
};

export default CheckoutListing;
