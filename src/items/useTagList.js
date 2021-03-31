import { useState, useEffect } from "react";

const useTagList = (items) => {
  const [relevantTags, setRelevantTags] = useState({
    all: [],
    color: [],
    water: [],
    light: [],
    growth: [],
    prop: [],
    other: [],
  });

  useEffect(() => {
    const sortByAlpha = (prevItem, item) => (prevItem > item ? 1 : -1);

    if (items.length > 0) {
      const tags = items
        .map((item) => (item.tags.all ? item.tags.all : []))
        .flat();
      const all = [...new Set(tags)];
      all.sort(sortByAlpha);

      const colorTags = items
        .map((item) => {
          if (item.tags.color) {
            return item.tags.color;
          }
          return [];
        })
        .flat();
      const color = [...new Set(colorTags)];
      color.sort(sortByAlpha);

      const waterTags = items
        .map((item) => {
          if (item.tags.water) {
            return item.tags.water;
          }
          return [];
        })
        .flat();
      const water = [...new Set(waterTags)];
      water.sort(sortByAlpha);

      const lightTags = items
        .map((item) => {
          return item.tags.light ? item.tags.light : [];
        })
        .flat();
      const light = [...new Set(lightTags)];
      light.sort(sortByAlpha);

      const growthTags = items
        .map((item) => {
          return item.tags.growth ? item.tags.growth : [];
        })
        .flat();
      const growth = [...new Set(growthTags)];
      growth.sort(sortByAlpha);

      const propTags = items.map((item) => {
        return item.tags.prop ? item.tags.prop : [];
      }).flat();
      const prop = [...new Set(propTags)];
      prop.sort(sortByAlpha);

      const otherTags = items.map((item) => {
        return item.tags.other ? item.tags.other : [];
      }).flat();
      const other = [...new Set(otherTags)];
      other.sort(sortByAlpha)

      setRelevantTags({ all, color, water, light, growth, prop, other });
    }
  }, [items]);
  return relevantTags;
};

export default useTagList;
