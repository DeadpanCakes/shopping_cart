import { useState, useEffect } from "react";

const useFilter = (items, appliedTags, isStrict ) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (appliedTags.length > 0) {
      if (isStrict) {
        setFilteredItems(
          items.filter((item) => {
            let i = 0;
            while (i < item.tags.all.length) {
              //Check if all appliedTags are included in an item
              if (appliedTags.every((appliedTag) => item.tags.all.includes(appliedTag))) {
                return true;
              }
              i++;
            }
            return false;
          })
        );
      } else {
        setFilteredItems(
          items.filter((item) => {
            let i = 0;
            while (i < appliedTags.length) {
              if (item.tags.all.includes(appliedTags[i])) {
                return true;
              }
              i++;
            }
            return false;
          })
        );
      }
    } else {
      setFilteredItems(items);
    }
  }, [items, appliedTags, isStrict]);

  return filteredItems;
};

export default useFilter;
