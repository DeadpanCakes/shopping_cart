const tagFactory = (color=[], water=[], light=[], growth=[], propagation=[], ...other) => {
  return {
    color,
    water,
    light,
    growth,
    propagation,
    other,
    get all() {
      if ([color, water, light, growth, propagation, ...other].flat()){
        return [color, water, light, growth, propagation, ...other].flat()
      }
      return [];
    },
  };
};

export default tagFactory;
