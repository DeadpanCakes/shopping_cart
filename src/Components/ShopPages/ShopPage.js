import { Fragment } from "react";
import StoreNav from "./StoreNav";
import ShopHero from "./ShopHero";
import CategoryPage from "./CategoryPage";

const ShopPage = (props) => {
  const { category } = props;
  return (
    <Fragment>
      <h1>{category}</h1>
      <ShopHero category={category} />
      <div style={{display:'flex'}}>
        <StoreNav />
        <CategoryPage category={category} />
      </div>
    </Fragment>
  );
};

export default ShopPage;
