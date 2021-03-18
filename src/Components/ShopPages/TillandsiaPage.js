import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShopHero from './ShopHero';
import heroImg from './img/tillyHero.png'

const TillandsiaPage = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }

  return (
    <Fragment>
      <ShopHero src={heroImg} alt="A pile of healthy air plants"/>
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
