import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SuppliesPage = () => {
  console.log('reached')
  return (
    <Fragment>
      <Link to="/shop">Go Back</Link>
      <main>
        {stock.supplies.map((item) => {
          return <ItemListing key={item.id} item={item} />;
        })}
      </main>
    </Fragment>
  );
};

export default SuppliesPage;
