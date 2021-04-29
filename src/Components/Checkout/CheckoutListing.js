const CheckoutListing = (props) => {
  const { item } = props;

  return (
    <li style={{display: 'flex', height: '70px', maxWidth: '50%', margin: '20px'}}>
      <img src={item.imgSrc} alt={`A(n) ${item.name}`} style={{borderRadius: '5px'}}></img>
      <h3 style={{alignSelf: 'center', marginLeft: '10px'}}>{`${item.quantity}x ${item.name}`}</h3>
      <h2 style={{fontSize: '2.5em', alignSelf: 'flex-end', marginLeft: 'auto'}}>{`$${item.quantity * item.price}`}</h2>
    </li>
  );
};

export default CheckoutListing;
