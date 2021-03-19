import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShopHero from "./ShopHero";
import ItemListing from "../ItemListing";
import houseplantHero from "./img/houseplantHero.png";
import succulentHero from "./img/succulentHero.png";
import tillyHero from "./img/tillyHero.png";
import supplyHero from "./img/suppliesHero.png";

const HouseplantHero = () => (
  <ShopHero src={houseplantHero} alt="A row of potted houseplants" />
);
const SucculentHero = () => (
  <ShopHero src={succulentHero} alt="A pastel succulent arrangement" />
);
const TillyHero = () => (
  <ShopHero src={tillyHero} alt="A pile of healthy tillandsia" />
);
const SupplyHero = () => (
  <ShopHero src={supplyHero} alt="A box of gardening tools" />
);

const CategoryPage = (props) => {
  const { category, categoryStock } = props;
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  const getHero = () => {
    switch (category) {
      case "Succulents":
        return <SucculentHero />;
      case "Tillandsia":
        return <TillyHero />;
      case "Supplies":
        return <SupplyHero />;
      default:
        return <HouseplantHero />;
    }
  };

  return (
    <Fragment>
      <h1>{category}</h1>
      {getHero()}
      <Link to="/shop">Go Back</Link>
      <main style={containerStyle}>
        {categoryStock.map((item) => (
          <ItemListing key={item.key} item={item} />
        ))}
      </main>
    </Fragment>
  );
};

export default CategoryPage;
