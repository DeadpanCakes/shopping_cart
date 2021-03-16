import stock from "../../items/stock";
import ItemListing from "../ItemListing";

const SuppliesPage = () => {
  return (
    <main>
      {stock.supplies.map((item) => {
      return (
        <ItemListing key={item.id} item={item} />
      )})}
    </main>
  );
};

export default SuppliesPage;
