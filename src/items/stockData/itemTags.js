import TagList from "../itemFactories/tagFactory";

const direct = "Tolerates Direct Light";
const drought = "Drought-Resistant";
const drown = "Drown-Resistant";
const green = "Green";
const pink = "Pink";
const fast = "Fast Grower";
const black="Black"
const small = "Stays Small";
const large = "Grows To Be Large";
const roots = "Roots Quickly";
const stem = "Stem Propagation";
const orange = "Orange";
const leaf = "Leaf Propagation";
const purple = "Purple";
const hanging = "Hanging";
const lowLight = "Tolerates Low Light";
const fuzzy = "Fuzzy";
const multicolor = "Multicolor";
const changes = "Color-Changing";
const yellow = "Yellow";
const blue = "Blue";
const white = "White";
const offsets = "Offsets Quickly";
const slow = "Slow Grower";
const silver = "Silver";
const vining = "Vining";
const rosette = "Rosette";
const rot = "Rot-Prone"

const itemTags = {
  neon: TagList(
    ["Green", yellow],
    ["Drown-Resistant"],
    [lowLight],
    ["Fast Grower", "Hanging", vining],
    ["Roots Quickly", "Stem Propagation"]
  ),
  babyBunny: TagList(
    ["Purple", "Green", multicolor],
    ["Drown-Resistant"],
    [lowLight],
    ["Fast Grower", "Hanging", vining],
    ["Roots Quickly", "Stem Propagation"],
    "Fuzzy"
  ),
  lola: TagList(
    ["White", "Pink", "Green", "Multicolor"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Rosette", "Slow Grower"],
    ["Leaf Propagation"]
  ),
  raspberry: TagList(
    ["Green", "Pink", "White", "Multicolor", "Color-Changing"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Rosette"],
    ["Leaf Propagation"]
  ),
  burrito: TagList(
    ["Green"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Hanging", fast],
    ["Leaf Propagation", "Stem Propagation"]
  ),
  hooks: TagList(
    ["Green", purple, multicolor],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Hanging"],
    ["Stem Propagation"]
  ),
  bear: TagList(
    ["Green", "Red"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    [],
    ["Stem Propagation"],
    "Fuzzy"
  ),
  guat: TagList(
    ["Green", "Red", "Color-Changing"],
    ["Drought-Resistant"],
    [],
    [rosette],
    ["Offsets Quickly"]
  ),
  xero: TagList(
    ["Green", "White"],
    ["Drought-Resistant", rot],
    ["Tolerates Direct Light"],
    ["Slow Grower", rosette],
    []
  ),
  brachy: TagList(
    ["Green", "Red", "Color-Changing"],
    ["Drought-Resistant"],
    [],
    [rosette],
    []
  ),
  strepto: TagList(
    ["Green", "White", "Pink", "Color-Changing"],
    ["Drought-Resistant", rot],
    [],
    [],
    [],
    "Showy Blooms"
  ),
  peach: TagList(
    ["Green", "Pink", "Orange", "Color-Changing"],
    ["Drought-Resistant"],
    [],
    [],
    []
  ),
  crocata: TagList(
    ["Green", "White", "Purple"],
    ["Drought-Resistant", rot],
    [],
    ["Fast Grower"],
    ["Offsets Quickly"],
    "Fragrant Bloom"
  ),
  split: TagList(["Green"], [], [], ["Fast Grower", large], ["Stem Propagation"]),
  bunnyEar: TagList(
    ["Green"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    [slow],
    []
  ),
  goldenBarrel: TagList(
    ["Green"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    [slow],
    []
  ),
  hearts: TagList(
    ["Green", "Pink", "Multicolor"],
    [],
    [],
    ["Fast Grower"],
    ["Roots Quickly", "Stem Propagation"]
  ),
  pinkJelly: TagList(
    ["Green", "Pink", "Red", "Multicolor"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Fast Grower"],
    ["Roots Quickly", "Leaf Propagation", "Stem Propagation"]
  ),
  straminea: TagList(["Green"], ["Drought-Resistant"], [], [large], []),
  duratii: TagList(["Green"], ["Drought-Resistant"], [], [large], []),
  tectorum: TagList(
    ["White"],
    ["Drought-Resistant", rot],
    ["Tolerates Direct Light"],
    ["Slow Grower", "Stays Small"],
    []
  ),
  curly: TagList(["Green", "Pink", changes], ["Drought-Resistant"], [], [large], []),
  polka: TagList(
    ["Pink"],
    ["Drown-Resistant"],
    ["Tolerates Low Light"],
    [],
    []
  ),
  teddy: TagList(
    ["Green"],
    ["Drought-Resistant"],
    ["Tolerates Low Light"],
    ["Stays Small"],
    []
  ),
  panda: TagList(
    ["White", "Brown", multicolor],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    [],
    ["Roots Quickly"]
  ),
  splitRock: TagList(
    ["Green", "Blue", "Pink", multicolor],
    ["Drought-Resistant", "Rot-Prone"],
    ["Needs Plenty Of Light"],
    ["Slow Grower", small],
    []
  ),
  moonstone: TagList(
    ["Purple", "Blue", white, "Pink", multicolor, changes],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Slow Grower", rosette],
    ["Leaf Propagation", "Stem Propagation"]
  ),
  colorata: TagList(
    ["White", "Pink", multicolor, changes],
    ["Drought-Resisntant"],
    ["Tolerates Direct Light"],
    ["Fast Grower", rosette],
    []
  ),
  mother: TagList(
    ["Green"],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Fast Grower"],
    ["Offsets Quickly"]
  ),
  spanishMoss: TagList(
    ["Green", "White"],
    ["Drought-Resistant"],
    [],
    ["Slow Grower", "Hanging"],
    []
  ),
  buttonFern: TagList(["Green"], [], ["Tolerates Low Light"], [], []),
  moonLightPhilo: TagList(
    ["Green", "Yellow", multicolor],
    [],
    [],
    ["Fast Grower"],
    []
  ),
  nanouk: TagList(
    ["Pink", "Purple", "Green", multicolor],
    [],
    ["Tolerates Low Light"],
    ["Fast Grower"],
    ["Roots Quickly"]
  ),
  moneyPlant: TagList(["Green"], [], [], [], []),
  peacock: TagList(
    ["Green", "Purple", "Black", multicolor],
    [],
    ["Tolerates Low Light"],
    [],
    []
  ),
  bunnySucc: TagList(
    ["Green"],
    ["Rot-Prone"],
    ["Needs Plenty Of Light"],
    ["Slow Grower"],
    [],
    "Seeds"
  ),
  ghostPlant: TagList(
    ["White", "Green", "Pink", multicolor, changes],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Fast Grower", rosette],
    ["Offsets Quickly", "Roots Quickly"]
  ),
  jellyBeans: TagList(
    ["Green", "Red", multicolor, changes],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Fast Grower"],
    ["Offsets Quickly"]
  ),
  calicoKitten: TagList(
    ["Red", "Purple", "Green", "Pink", multicolor, changes],
    [],
    [],
    [hanging],
    ["Offsets Quickly"]
  ),
  pvn: TagList(
    ["Pink", "Purple", multicolor],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    [rosette],
    []
  ),
  whiteFusion: TagList(
    ["Green", "White", "Pink", multicolor],
    [],
    ["Tolerates Low Light"],
    [],
    []
  ),
  tineke: TagList(
    ["Green", "Pink", white, multicolor],
    [],
    ["Tolerates Low Light"],
    [],
    []
  ),
  monstera: TagList(
    ["Green"],
    [],
    ["Tolerates Low Light"],
    ["Fast Grower", large],
    []
  ),
  krimsonQueen: TagList(["Green", "White", "Pink", multicolor], [], [], [hanging], [], "Showy Blooms"),
  triostar: TagList(
    ["Green", "Pink", "White", multicolor],
    [],
    ["Tolerates Low Light"],
    ["Hanging", "Vining"],
    []
  ),
  prolifica: TagList(
    ["White", "Green", "Pink", multicolor, changes],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"],
    ["Fast Grower"],
    ["Offsets Quickly"]
  ),
  babyFingers: TagList(
    ["White", "Pink", "Green", multicolor, changes],
    ["Rot-Prone"],
    ["Tolerates Direct Light"],
    [slow],
    [stem, leaf],
  ),
  caput: TagList(
    ["Green", "Purple", multicolor],
    ["Drought-Resistant"],
    [],
    ["Slow Grower"],
    [],
    "Showy Blooms"
  ),
  bulbosa: TagList(["Green", "Purple", multicolor], [], [], [], []),
  intermedia: TagList(["Green"], [], [], [], []),
  aeranthos: TagList(["Green"], [], [], [], []),
  seleriana: TagList(
    ["Green"],
    [],
    [],
    ["Slow Grower", "Grows To Be Large"],
    []
  ),
  harrisii: TagList(
    ["Green", "Purple", "Blue", changes],
    ["Drought-Resistant"],
    ["Tolerates Direct Light"]
  ),
  pseudobaiyeli: TagList(["Green"], [drought], [], [], []),
  butzii: TagList([green], [], [], [], []),
  funkiana: TagList([green], [drought], [], [small]),
  pruinosa: TagList([purple, green, multicolor], [], [], [small], [], fuzzy),
  incaGold: TagList([green, yellow, multicolor], [], [], [], []),
  haworthiaCooperiTrun: TagList([green], [drought], [lowLight], [small]),
  dasyphyllum: TagList(
    [green, pink, blue, multicolor, changes],
    [drought],
    [direct],
    [fast]
  ),
  laui: TagList(
    [pink, blue, white, changes, multicolor],
    [drought],
    [direct],
    [rosette],
    [leaf, stem]
  ),
  mirinae: TagList(
    [white, yellow, pink],
    [],
    [],
    [fast, rosette, small],
    [offsets, leaf, stem,]
  ),
  superbum: TagList([purple], [drought], [direct], [rosette], [leaf, stem]),
  superba: TagList([green, yellow], [drought], [lowLight], [slow], [leaf]),
  snakeBlackGold: TagList([green, yellow], [drought], [lowLight], [], [leaf]),
  birkin: TagList(
    [green, white, white],
    [drown],
    [lowLight],
    [fast, hanging],
    [stem]
  ),
  princeOfOrange: TagList(
    [green, orange, yellow],
    [drown],
    [lowLight],
    [fast],
    [stem]
  ),
  hindu: TagList([green, white], [drought], [], [hanging], [stem], "Showy Blooms"),
  songOfIndia: TagList([green, yellow], [], [], [], []),
  ludisia: TagList([black, green, white], [drown], [lowLight], [slow, small], []),
  hangingPot: TagList([], [] ,[] ,[hanging], []),
  
};

export default itemTags;
