import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SucculentPage = () => {
  const styling = {
    display: "grid",
  };

  console.log('reached')
  return (
    <Fragment>
      <Link to="/shop">Go Back</Link>
      <main style={styling}>
        {stock.succulents.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </main>
    </Fragment>
  );
};

export default SucculentPage;
