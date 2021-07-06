import houseplantFactory from "../itemFactories/houseplantFactory";
import succulentFactory from "../itemFactories/succulentFactory";
import tillandsiaFactory from "../itemFactories/tillandsiaFactory";
import suppliesFactory from "../itemFactories/suppliesFactory";
import images from "../images/imgImport";
import itemTags from "./itemTags";

const stock = (() => {
  const items = [
    houseplantFactory(0, "Neon Pothos", 5, itemTags.neon, images.neon),
    houseplantFactory(
      1,
      "Baby Bunny Bellies",
      6,
      itemTags.babyBunny,
      images.bunny
    ),
    succulentFactory(2, 'Echeveria "Lola"', 4, itemTags.lola, images.lola),
    succulentFactory(
      3,
      'Echeveria "Raspberry Ice"',
      6,
      itemTags.raspberry,
      images.raspberry
    ),
    succulentFactory(4, 'Sedum "Burrito"', 4, itemTags.burrito, images.burrito),
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
    tillandsiaFactory(7, "Ionantha Guatemala", 1, itemTags.guat, images.guat),
    tillandsiaFactory(8, "Xerographica", 10, itemTags.xero, images.xero),
    tillandsiaFactory(9, "Brachycaulos", 2, itemTags.brachy, images.brachy),
    tillandsiaFactory(
      10,
      "Streptophylla",
      10,
      itemTags.strepto,
      images.strepto
    ),
    tillandsiaFactory(11, "Capitata Peach", 2, itemTags.peach, images.peach),
    tillandsiaFactory(12, "Crocata Giant", 2, itemTags.crocata, images.crocata),
    suppliesFactory(
      13,
      "3 Inch Terracotta Pot",
      2,
      itemTags.planter,
      images.planter
    ),
    suppliesFactory(14, "Gritty Potting Mix", 5, itemTags.mix, images.mix),
    suppliesFactory(15, "Tillandisa Wire", 2, itemTags.wire, images.wire),
    houseplantFactory(16, "Split Leaf Philodendron", 5, itemTags.split, images.splitLeaf),
    houseplantFactory(17, "Swiss Cheese", 6, itemTags.split, images.swissCheese),
    succulentFactory(18, "Bunny Ear Cactus", 3, itemTags.bunnyEar, images.bunnyEar),
    succulentFactory(19, "Golden Barrel Cactus", 4, itemTags.goldenBarrel, images.goldenBarrel),
    succulentFactory(20, "String of Hearts", 10, itemTags.hearts, images.stringOfHearts),
    succulentFactory(21, "Pink Jelly Bean", 5, itemTags.pinkJelly, images.pinkJelly),
    tillandsiaFactory(22, "Straminea", 10, itemTags.straminea, images.straminea),
    tillandsiaFactory(23, "Duratii", 12, itemTags.duratii, images.duratii),
    tillandsiaFactory(24, "Tectorum Ecuador", 15, itemTags.tectorum, images.tectorumEcuador),
    tillandsiaFactory(25, "Curly Slim", 20, itemTags.curly, images.curlySlim),
    houseplantFactory(26, "Polka Dot Plant", 3, itemTags.polka, images.polkaDot),
    tillandsiaFactory(27, "Teddy Bear", 20, itemTags.teddy, images.teddyBear),
    succulentFactory(28, "Panda Plant", 3, itemTags.panda, images.pandaPlant),
    succulentFactory(29, "Split Rock", 3, itemTags.splitRock, images.splitRock),
    succulentFactory(30, "Moonstones", 5, itemTags.moonstone, images.moonstone),
    succulentFactory(31, "Pink Moonstones", 7, itemTags.moonstone, images.pinkMoonstone),
    succulentFactory(32, 'Echeveria "Colorata"', 5, itemTags.colarata, images.colorata),
    succulentFactory(33, "Mother Of Thousands", 3, itemTags.mother, images.mother),
    tillandsiaFactory(34, "Spanish Moss", 14, itemTags.spanishMoss, images.spanishMoss),
    houseplantFactory(35, "Button Fern", 5, itemTags.buttonFern, images.buttonFern),
    houseplantFactory(36, "Moonlight Philodendron", 6, itemTags.moonlightPhilo, images.moonlightPhilo),
    houseplantFactory(37, "Tradescantia Nanouk", 5, itemTags.nanouk, images.nanouk),
    houseplantFactory(38, "Money Plant", 6, itemTags.moneyPlant, images.moneyPlant),
    houseplantFactory(39, "Peacock Plant", 8, itemTags.peacock, images.peacockPlant),
    succulentFactory(40, '"Bunny Succulent" Seeds', 4, itemTags.bunnySucc, images.bunnySucc),
    succulentFactory(41, "Ghost Plant", 4, itemTags.ghostPlant, images.ghostPlant),
    succulentFactory(42, "Jelly Beans", 3, itemTags.jellyBeans, images.jellyBean),
    succulentFactory(43, "Calico Kitten", 3, itemTags.calicoKitten, images.calicoKitten),
    succulentFactory(44, 'Echecveria "Perle von Nurnberg"', 5, itemTags.pvn, images.pvn),
    suppliesFactory(
      45,
      "4 Inch Terracotta Pot",
      2,
      itemTags.planter,
      images.planter
    ),
    suppliesFactory(
      46,
      "5 Inch Terracotta Pot",
      2,
      itemTags.planter,
      images.planter
    ),
    suppliesFactory(
      47,
      "6 Inch Terracotta Pot",
      2,
      itemTags.planter,
      images.planter
    ),
    suppliesFactory(48, "Houseplant Potting Mix", 5, itemTags.mix, images.mix),
    suppliesFactory(49, "Tillandsia Fertilizer", 2, itemTags.placeHolder, images.fertilizer),
    houseplantFactory(50, "Calathea 'White Fusion'", 10, itemTags.whiteFusion, images.whiteFusion),
    houseplantFactory(51, "Rubber Tree 'Tineke'", 5, itemTags.tineke, images.tineke),
    houseplantFactory(52, "Monstera Deliciosa", 10, itemTags.monstera, images.monsteraDeliciosa),
    houseplantFactory(53, "Hoya Krimson Queen", 5, itemTags.krimsonQueen, images.krimsonQueen),
    houseplantFactory(54, "Stromanthe 'Triostar'", 5, itemTags.trioStar, images.triostar),
    succulentFactory(55, "Echeveria Prolifica", 3, itemTags.prolifica, images.prolifica),
    succulentFactory(56, "Baby Fingers", 5, itemTags.babyFingers, images.babyFingers),
    tillandsiaFactory(57, "Caput Medusa", 2, itemTags.caput, images.caputMedusa),
    tillandsiaFactory(58, "Intermedia", 10, itemTags.intermedia ,images.intermedia),
    tillandsiaFactory(59, "Bulbosa", 2, itemTags.bulbosa, images.bulbosa),
    tillandsiaFactory(60, "Aeranthos", 2, itemTags.aeranthos, images.aeranthos),
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
