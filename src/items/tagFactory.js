const tagFactory = (color=[], water=[], light=[], growth=[], prop=[], ...other) => {
  return {
    color,
    water,
    light,
    growth,
    prop,
    other,
    get all() {
      return [color, water, light, growth, ...other].flat();
    },
  };
};

export default tagFactory;
