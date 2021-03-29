import { useState, useEffect } from "react";

const useFilter = (items, tags, strictness) => {
  const [filteredItems, setFilteredItems] = useState(items);
  //if strict search, only show items that match all selected tags

  useEffect(() => {
    if (tags[0]) {
      setFilteredItems(
        items.filter((item) => {
          let i = 0;
          while (i < tags.length) {
            if (item.tagArr.includes(tags[i])) {
              return item;
            }
            i++;
          }
          return null;
        })
      );
    }
  }, [items, tags]);

  return tags[0] ? filteredItems : items 
};

export default useFilter;
