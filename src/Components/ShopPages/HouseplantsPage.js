import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const HouseplantsPage = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <Fragment>
      <Link to="/shop">Go Back</Link>
      <main style={containerStyle}>
        {stock.houseplants.map((item) => (
            <ItemListing key={item.key} item={item} />
        ))}
      </main>
    </Fragment>
  );
};

export default HouseplantsPage;
