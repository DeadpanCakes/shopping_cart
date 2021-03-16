import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from 'react-router-dom';

const HouseplantsPage = () => {
  return (
    <Fragment>
        <Link to='/shop'>Go Back</Link>
      <main>
        {stock.houseplants.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </main>
    </Fragment>
  );
};

export default HouseplantsPage;
