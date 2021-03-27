import { useState, useEffect } from "react";

const useFilter = (items, tags) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (tags[0]) {
      console.log("recahed", tags);
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

  console.log('tags:',tags)
  return tags[0] ? filteredItems : items 
};

export default useFilter;
