import ItemListing from "../ItemListing";
import stock from "../../items/stock";
import { Link } from "react-router-dom";

const shopSectionsStyle = {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
};

const categoryStyle = {
  display: "flex",
  flexWrap: "nowrap",
};

const ShopPage = () => {
  return (
    <main>
      <h1>Shop</h1>
      <div style={shopSectionsStyle} className="shopSections">
        <h2>Houseplants</h2>
        <div style={categoryStyle} className="itemCategoryContainers">
          {stock.houseplants.map((item) => (
            <ItemListing key={item.id} item={item} />
          ))}
        </div>
        <Link to="/shop/houseplants">See All Housplants</Link>
      </div>
      <div style={shopSectionsStyle} className="shopSections">
        <h2>Succulents</h2>
        <div style={categoryStyle} className="itemCategoryContainers">
          {stock.succulents.map((item) => (
            <ItemListing key={item.id} item={item} />
          ))}
        </div>
        <Link to="/shop/succulents">See All Succulents</Link>
      </div>
      <div style={shopSectionsStyle} className="shopSections">
        <h2>Tillandsia (Air Plants)</h2>
        <div style={categoryStyle} className="itemCategoryContainers">
          {stock.tillandsia.map((item) => (
            <ItemListing key={item.id} item={item} />
          ))}
        </div>
        <Link to="/shop/tillandsia">See All Tillandsia</Link>
      </div>
      <div style={shopSectionsStyle} className="shopSections">
        <h2>Supplies</h2>
        <div style={categoryStyle} className="itemCategoryContainers">
          {stock.supplies.map((item) => (
            <ItemListing key={item.id} item={item} />
          ))}
        </div>
        <Link to="/shop/supplies">See All Supplies</Link>
      </div>
    </main>
  );
};

export default ShopPage;
