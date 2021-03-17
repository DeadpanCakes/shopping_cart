const CartPage = (props) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>{props.cart[0]}</p>
    </div>
  );
};

export default CartPage;
