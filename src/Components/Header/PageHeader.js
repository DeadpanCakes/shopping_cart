import TopBanner from "./TopBanner";
import HeaderNav from  './HeaderNav';

const PageHeader = (props) => {
  const containerStyle = {
    width: "100vw",
    height: "120px",
    borderBottom: "10px solid #1C2F4A",
  };

  const headerStyle = {
    position: "fixed",
    height: "120px",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#507DBC",
    borderBottom: "10px solid #1C2F4A",
    zIndex: "1",
  };

  return (
    <div className="headerContainer" style={containerStyle}>
      <header style={headerStyle}>
        <TopBanner />
        <HeaderNav cart={props.cart} />
      </header>
    </div>
  );
};

export default PageHeader;
