import { useState, useEffect } from "react";

const useFilter = (items, tags, strictness = false) => {
  const [filteredItems, setFilteredItems] = useState(items);
  //if strict search, only show items that match all selected tags

  useEffect(() => {
    if (tags[0]) {
      setFilteredItems(
        items.filter((item) => {
          if (Array.isArray(item.tags.all)) {
            let i = 0;
            while (i < tags.length) {
              if (item.tags.all.includes(tags[i])) {
                return item;
              }
              i++;
            }
            return null;
          }
          return null;
        })
      );
    }
  }, [items, tags]);

  return tags[0] ? filteredItems : items;
};

export default useFilter;
