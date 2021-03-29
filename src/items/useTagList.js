import { useState, useEffect } from "react";

const useTagList = (items) => {
  const [relevantTags, setRelevantTags] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const tags = items.map((item) => item.tagArr).flat()
      const uniqueTags = [...new Set(tags)];
      uniqueTags.sort((prevItem, item) => {
        if (prevItem > item) {
          return 1
        }
        return -1
      })
      setRelevantTags(uniqueTags)
      console.log(tags, uniqueTags)
    }
  },[items])
  return relevantTags
};

export default useTagList;
