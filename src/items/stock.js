import houseplantFactory from "./houseplantFactory";
import succulentFactory from "./succulentFactory";
import tillandsiaFactory from "./tillandsiaFactory";
import suppliesFactory from "./suppliesFactory";
import images from './images/imgImport';

const stock = (() => {
  const items = [
    houseplantFactory(0, "Neon Pothos", 5, ["Low Light", "Fast Grower"], images.neon),
    houseplantFactory(1, "Baby Bunny Bellies", 6, [
      "Low Light",
      "Fast Grower",
      "Fuzzy",
    ], images.bunny),
    succulentFactory(2, 'Echeveria "Lola"', 4, [
      "Pastel",
      "Multicolor",
      "Drought-Resistant",
      "Showy Bloom",
    ], images.lola),
    succulentFactory(3, 'Echeveria "Raspberry Ice"', 6, [
      "Pastel",
      "Drought-Resistant",
      "Showy Bloom",
    ], images.raspberry),
    succulentFactory(4, 'Sedum "Burrito"', 4, [
      "Drought-Resistant",
      "Easy to Propagate",
      "Non-Toxic",
      "Hanging",
    ], images.burrito),
    succulentFactory(5, 'Senecio Radicans "Fish Hook"', 4, [
      "Drought-Resistant",
      "Fast Grower",
      "Easy To Propagate",
      "Hanging",
    ], images.fishhook),
    succulentFactory(6, 'Cotyledon Tomentosa "Bear\'s Paw"', 3, [
      "Drought-Resistant",
      "Fuzzy",
    ], images.bear),
    tillandsiaFactory(7, "Ionantha Guatemala", 1, [
      "Slow Grower",
      "Changes Color",
      "Clumps Quickly",
    ], images.guat),
    tillandsiaFactory(8, "Xerographica", 10, [
      "Slow Grower",
      "Long-Lived",
      "Drought-Resistant",
    ], images.xero),
    tillandsiaFactory(9, "Brachycaulos", 2, ["Changes Color"], images.brachy),
    tillandsiaFactory(10, "Streptophylla", 10, ["Slow Grower", "Showy Bloom"], images.strepto),
    tillandsiaFactory(11, "Capitata Peach", 2, ["Changes Color"], images.peach),
    tillandsiaFactory(12, "Crocata Giant", 2, [
      "Fast Grower",
      "Clumps Quickly",
    ], images.crocata),
    suppliesFactory(13, "Terracotta Pot", 2, ["Supplies"], images.planter),
    suppliesFactory(14, "Gritty Potting Mix", 5, ["Supplies"], images.mix),
    suppliesFactory(15, "Tillandisa Wire", 2, ["Supplies"], images.wire),
  ];

  return {
      items,
      get houseplants() {
          return items.filter(item => item.category === 'houseplant')
      },
      get succulents() {
          return items.filter(item => item.category === 'succulent')
      },
      get tillandsia() {
          return items.filter(item => item.category === 'tillandsia')
      },
      get supplies() {
          return items.filter(item => item.category === 'supply')
      }
  }
})();

export default stock;
