const CheckoutFormTabs = (props) => {
  const { checkoutStep, setCheckoutStep } = props;

  const changeTab = (step) => {
    switch (step) {
      case "shipping":
        setCheckoutStep(2);
        break;
      case "billing":
        setCheckoutStep(3);
        break;
      case "payment":
        setCheckoutStep(4);
        break;
      case "confirmation":
        setCheckoutStep(5);
        break;
      default:
        setCheckoutStep(1);
    }
  };

  const isTabInactive = (currentStep, threshhold) => {
    if (currentStep >= threshhold) {
      return false;
    }
    return true;
  };

  const ulStyle = {display: 'flex',width: '100%', marginBottom: 10}
  const tabStyle = {flexGrow: '1'}

  return (
    <ul style={ulStyle}>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("registration");
        }}
        style={tabStyle}
      >
        Registration
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("shipping");
        }}
        disabled={isTabInactive(checkoutStep, 2)}
        style={tabStyle}
      >
        Shipping
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("billing");
        }}
        disabled={isTabInactive(checkoutStep, 3)}
        style={tabStyle}
      >
        Billing
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("payment");
        }}
        disabled={isTabInactive(checkoutStep, 4)}
        style={tabStyle}
      >
        Payment Info
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("confirmation");
        }}
        disabled={isTabInactive(checkoutStep, 5)}
        style={tabStyle}
      >Confirmation</button>
    </ul>
  );
};

export default CheckoutFormTabs;
