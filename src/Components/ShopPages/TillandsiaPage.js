import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const TillandsiaPage = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }

  return (
    <Fragment>
      <Link to="/shop">Go Back</Link>
      <main style={containerStyle}>
        {stock.tillandsia.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </main>
    </Fragment>
  );
};

export default TillandsiaPage;
