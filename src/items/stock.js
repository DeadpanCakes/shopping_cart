import houseplantFactory from "./houseplantFactory";
import succulentFactory from "./succulentFactory";
import tillandsiaFactory from "./tillandsiaFactory";
import suppliesFactory from "./suppliesFactory";
import images from "./images/imgImport";
import itemTags from './itemTags';

const stock = (() => {
  const items = [
    houseplantFactory(
      0,
      "Neon Pothos",
      5,
      itemTags.neon,
      images.neon
    ),
    houseplantFactory(
      1,
      "Baby Bunny Bellies",
      6,
      itemTags.babyBunny,
      images.bunny
    ),
    succulentFactory(
      2,
      'Echeveria "Lola"',
      4,
      itemTags.lola,
      images.lola
    ),
    succulentFactory(
      3,
      'Echeveria "Raspberry Ice"',
      6,
      itemTags.raspberry,
      images.raspberry
    ),
    succulentFactory(
      4,
      'Sedum "Burrito"',
      4,
      itemTags.burrito,
      images.burrito
    ),
    succulentFactory(
      5,
      'Senecio Radicans "Fish Hook"',
      4,
      itemTags.hooks,
      images.fishhook
    ),
    succulentFactory(
      6,
      'Cotyledon Tomentosa "Bear\'s Paw"',
      3,
      itemTags.bear,
      images.bear
    ),
    tillandsiaFactory(
      7,
      "Ionantha Guatemala",
      1,
      itemTags.guat,
      images.guat
    ),
    tillandsiaFactory(
      8,
      "Xerographica",
      10,
      itemTags.xero,
      images.xero
    ),
    tillandsiaFactory(9, "Brachycaulos", 2, itemTags.brachy, images.brachy),
    tillandsiaFactory(
      10,
      "Streptophylla",
      10,
      itemTags.strepto,
      images.strepto
    ),
    tillandsiaFactory(11, "Capitata Peach", 2, itemTags.peach, images.peach),
    tillandsiaFactory(
      12,
      "Crocata Giant",
      2,
      itemTags.crocata,
      images.crocata
    ),
    suppliesFactory(13, "Terracotta Pot", 2, itemTags.planter, images.planter),
    suppliesFactory(14, "Gritty Potting Mix", 5, itemTags.mix, images.mix),
    suppliesFactory(15, "Tillandisa Wire", 2, itemTags.wire, images.wire),
    houseplantFactory(16, "Split Leaf Philodendron", 5, itemTags.split),
    houseplantFactory(17, "Swiss Cheese", 6, itemTags.split),
    succulentFactory(18, "Bunny Ear Cactus", 3, itemTags.bunnyEar),
    succulentFactory(19, "Golden Barrel Cactus", 4, itemTags.goldenBarrel),
    succulentFactory(20, "String of Hearts", 10, itemTags.hearts),
    succulentFactory(21, "Pink Jelly Bean", 5, itemTags.pinkJelly),
    tillandsiaFactory(22, "Straminea", 10, itemTags.straminea),
    tillandsiaFactory(23, "Duratii", 12, itemTags.duratii),
    tillandsiaFactory(24, "Tectorum Ecuador", 15, itemTags.tectorum),
    tillandsiaFactory(25, "Curly Slim", 20, itemTags.curly),
    houseplantFactory(26, "Polka Dot Plant", 3, itemTags.polka),
    tillandsiaFactory(27, "Teddy Bear", 20, itemTags.placeHolder),
    succulentFactory(28, "Panda Plant", 3, itemTags.placeHolder),
    succulentFactory(29, "Split Rock", 3, itemTags.placeHolder),
    succulentFactory(30, "Moonstones", 5, itemTags.placeHolder),
    succulentFactory(31, "Pink Moonstones", 7, itemTags.placeHolder),
    succulentFactory(32, 'Echeveria "Colorata"', 5, itemTags.placeHolder),
    succulentFactory(33, "Mother Of Thousands", 3, itemTags.placeHolder),
    tillandsiaFactory(34, "Spanish Moss", 14, itemTags.placeHolder),
    houseplantFactory(35, "Button Fern", 5, itemTags.placeHolder),
    houseplantFactory(36, "Moonlight Philodendron", 6, itemTags.placeHolder),
    houseplantFactory(37, "Tradescantia Nanouk", 5, itemTags.placeHolder),
    houseplantFactory(38, "Money Plant", 6, itemTags.placeHolder),
    houseplantFactory(39, "Peacock Plant", 8, itemTags.placeHolder),
    succulentFactory(40, 'Monilaria Obocina "Bunny Succulent" Seeds', 4, itemTags.placeHolder),
    succulentFactory(41, "Ghost Plant", 4, itemTags.placeHolder),
    succulentFactory(42, "Jelly Beans", 3, itemTags.placeHolder),
    succulentFactory(43, "Calico Kitten", 3, itemTags.placeHolder),
    succulentFactory(44, 'Echecveria "Perle von Nurnberg"', 5, itemTags.placeHolder),
  ];

  return {
    items,
    get houseplants() {
      return items.filter((item) => item.category === "houseplant");
    },
    get succulents() {
      return items.filter((item) => item.category === "succulent");
    },
    get tillandsia() {
      return items.filter((item) => item.category === "tillandsia");
    },
    get supplies() {
      return items.filter((item) => item.category === "supply");
    },
  };
})();

export default stock;
