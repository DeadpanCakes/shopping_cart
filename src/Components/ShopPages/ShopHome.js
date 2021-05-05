import stock from "../../items/stockData/stock";
import PageSection from "./PageSection";
import succulentImg from "./img/succulentBanner.png";
import houseplantBanner from "./img/houseplantBanner.png";
import tillyBanner from "./img/tillyBanner.png";
import supplyBanner from "./img/supplyBanner.png";
import ShopHomeHero from "./ShopHomeHero";
import allBanner from "./img/allBanner.png";

const ShopHome = () => {
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return (
    <main id="shopHome">
      <ShopHomeHero />
      <PageSection
        name={"All"}
        category={shuffle(stock.items)}
        link={"/shop/all"}
        bannerImg={allBanner}
      />
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
