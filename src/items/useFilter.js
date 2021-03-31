import { useState, useEffect } from "react";

const useFilter = (items, appliedTags, isStrict = true) => {
  const [filteredItems, setFilteredItems] = useState(items);
  //if strict search, only show items that match all selected tags

  useEffect(() => {
    if (appliedTags.length > 0) {
      setFilteredItems(
        items.filter((item) => {
            let i = 0;
            while (i < appliedTags.length) {
              if (item.tags.all.includes(appliedTags[i])) {
                return item;
              }
              i++;
            }
            return null;
        })
      );
    } else {
      setFilteredItems(items);
    }
  }, [items, appliedTags]);

  return filteredItems;
};

export default useFilter;
