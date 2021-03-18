import ItemListing from "../ItemListing";
import stock from "../../items/stock";
import { Link } from "react-router-dom";
import ShopHero from './ShopHero';
import heroImg from './homeHero.png'

const shopSectionsStyle = {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
};

const categoryStyle = {
  display: "flex",
  flexWrap: "nowrap",
};

const PageSection = (props) => {
  const { name, category, link } = props;
  return (
    <div style={shopSectionsStyle} className="shopSections">
      <h2>{name}</h2>
      <div style={categoryStyle}>
        {category.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <Link
        style={{ alignSelf: "flex-end" }}
        to={link}
      >{`See All ${name}`}</Link>
    </div>
  );
};

const ShopPage = () => {
  return (
    <main>
      <ShopHero src={heroImg} alt='Plants Against a Window' />
      <h1>Shop</h1>
      <PageSection
        name={"Houseplants"}
        category={stock.houseplants}
        link={"/shop/houseplants"}
      />
      <PageSection
        name={"Succulents"}
        category={stock.succulents}
        link={"/shop/succulents"}
      />
      <PageSection
        name={"Tillandsia"}
        category={stock.tillandsia}
        link={"/shop/tillandsia"}
      />
      <PageSection
        name={"Supplies"}
        category={stock.supplies}
        link={"/shop/supplies"}
      />
    </main>
  );
};

export default ShopPage;
