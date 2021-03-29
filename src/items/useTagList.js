import { useState, useEffect } from "react";

const useTagList = (items) => {
  const [relevantTags, setRelevantTags] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const tags = items.map((item) => item.tagArr).flat()
      const uniqueTags = [...new Set(tags)];
      setRelevantTags(uniqueTags)
      console.log(tags, uniqueTags)
    }
  },[items])
  return relevantTags;
};

export default useTagList;
