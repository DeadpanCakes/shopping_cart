import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShopHero from './ShopHero';
import heroImg from './img/houseplantHero.png'

const HouseplantsPage = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <Fragment>
      <ShopHero src={heroImg} alt='A group of potted houseplants'/>
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
