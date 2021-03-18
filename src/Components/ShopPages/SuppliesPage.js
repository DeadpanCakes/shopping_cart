import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShopHero from './ShopHero';
import heroImg from './img/suppliesHero.png'

const SuppliesPage = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr'
  };

  return (
    <Fragment>
      <ShopHero src={heroImg} alt="A box of gardening tools"/>
      <Link to="/shop">Go Back</Link>
      <main style={containerStyle}>
        {stock.supplies.map((item) => {
          return <ItemListing key={item.id} item={item} />;
        })}
      </main>
    </Fragment>
  );
};

export default SuppliesPage;
