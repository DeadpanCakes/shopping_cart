const tagFactory = (color=[], water=[], light=[], growth=[], prop=[], ...other) => {
  return {
    color,
    water,
    light,
    growth,
    prop,
    other,
    get all() {
      if ([color, water, light, growth, ...other].flat()){
        return [color, water, light, growth, ...other].flat()
      }
      return [];
    },
  };
};

export default tagFactory;
