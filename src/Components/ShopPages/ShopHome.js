import stock from "../../items/stock";
import PageSection from './PageSection'
import ShopHero from './ShopHero';
import heroImg from './img/homeHero.png'
import succulentImg from './img/succulentBanner.png';


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
        bannerImg={succulentImg}
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
