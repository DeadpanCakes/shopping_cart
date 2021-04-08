import stock from "../../items/stockData/stock";
import PageSection from './PageSection'
import ShopHero from './ShopHero';
import heroImg from './img/homeHero.png'
import succulentImg from './img/succulentBanner.png';
import houseplantBanner from './img/houseplantBanner.png';
import tillyBanner from './img/tillyBanner.png';
import supplyBanner from './img/supplyBanner.png';


const ShopHome = () => {

  return (
    <main id='shopHome'>
      <ShopHero src={heroImg} alt='Plants Against a Window' />
      <h1>Shop</h1>
      <PageSection
        name={"Houseplants"}
        category={stock.houseplants}
        link={"/shop/houseplants"}
        bannerImg={houseplantBanner}
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
        bannerImg={tillyBanner}
      />
      <PageSection
        name={"Supplies"}
        category={stock.supplies}
        link={"/shop/supplies"}
        bannerImg={supplyBanner}
      />
    </main>
  );
};

export default ShopHome;
