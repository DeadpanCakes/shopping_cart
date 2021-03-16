import ItemListing from "./ItemListing";
import stock from "../items/stock";

const ShopPage = () => {
  return (
    <main>
      <h1>Shop</h1>
      <div>
        <h2>Houseplants</h2>
        {stock.houseplants.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2>Succulents</h2>
        {stock.succulents.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2>Tillandsia (Air Plants)</h2>
        {stock.tillandsia.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2>Section 4</h2>
        {stock.supplies.map((item) => (
          <ItemListing key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default ShopPage;
