import stock from "../../items/stock";
import ItemListing from "../ItemListing";

const TillandsiaPage = () => {
  return (
    <main>
      {stock.tillandsia.map((item) => (
        <ItemListing key={item.id} item={item} />
      ))}
    </main>
  );
};

export default TillandsiaPage;
