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
  return (
    <ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("registration");
        }}
      >
        Registration
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("shipping");
        }}
        disabled={isTabInactive(checkoutStep, 2)}
      >
        Shipping
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("billing");
        }}
        disabled={isTabInactive(checkoutStep, 3)}
      >
        Billing
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTab("payment");
        }}
        disabled={isTabInactive(checkoutStep, 4)}
      >
        Payment Info
      </button>
    </ul>
  );
};

export default CheckoutFormTabs;