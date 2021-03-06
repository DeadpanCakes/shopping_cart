import TopBanner from "./TopBanner";
import HeaderNav from "./HeaderNav";
import { CartConsumer } from "../../CartContext";

const PageHeader = () => {
  const containerStyle = {
    width: "100%",
    height: "120px",
    borderBottom: "10px solid #1C2F4A",
  };

  const headerStyle = {
    position: "fixed",
    height: "120px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#507DBC",
    borderBottom: "10px solid #1C2F4A",
    zIndex: "3",
  };

  return (
    <CartConsumer>
      {(cart) => (
        <div className="headerContainer" style={containerStyle}>
          <header style={headerStyle}>
            <TopBanner />
            <HeaderNav cart={cart.items} removeItem={cart.removeItem} />
          </header>
        </div>
      )}
    </CartConsumer>
  );
};

export default PageHeader;
