import stock from "../../items/stock";
import ItemListing from "../ItemListing";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShopHero from "./ShopHero";
import heroImg from "./img/succulentHero.png";

const SucculentPage = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <Fragment>
      <ShopHero src={heroImg} alt="A pastel succulent arrangement" />
      <Link to="/shop">Go Back</Link>
      <h1>Succulents</h1>
      <main style={containerStyle}>
        {stock.succulents.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </main>
    </Fragment>
  );
};

export default SucculentPage;
