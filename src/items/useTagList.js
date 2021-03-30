import { useState, useEffect } from "react";

const useTagList = (items) => {
  const [relevantTags, setRelevantTags] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const tags = items
        .map((item) => {
          if (!!item.tags.all) {
            return item.tags.all;
          } else {
            return []
          }
        })
        .flat();
      const uniqueTags = [...new Set(tags)];
      uniqueTags.sort((prevItem, item) => {
        if (prevItem > item) {
          return 1;
        }
        return -1;
      });
      setRelevantTags(uniqueTags);
    }
  }, [items]);
  return relevantTags;
};

export default useTagList;
