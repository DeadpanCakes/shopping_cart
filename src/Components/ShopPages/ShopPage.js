import { Link } from "react-router-dom";
import StoreNav from "./StoreNav";
import ShopHero from "./ShopHero";
import CategoryPage from "./CategoryPage";

const ShopPage = (props) => {
  const { category } = props;
  console.log(category)
  return (
    <div>
      <h1>{category}</h1>
      <ShopHero category={category} />
      <StoreNav />
      <Link to="/shop">Go Back</Link>
      <CategoryPage category={category} />
    </div>
  );
};

export default ShopPage;
