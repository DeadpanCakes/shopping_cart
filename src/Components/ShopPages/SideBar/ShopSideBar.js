import { useEffect } from "react";
import StoreNav from "../StoreNav";
import TagCategory from "./TagCategory";
import AppliedTagList from './AppliedTagList';

const ShopSideBar = (props) => {
  const {
    stock,
    category,
    filterTags,
    setFilterTags,
    applicableTags,
    strictSearch,
    setStrictSearch,
  } = props;
  const tagCategories = ["color", "water", "light", "growth", "propagation", "other"];

  const handleTagCheck = (targetTag) => {
    if (filterTags.includes(targetTag)) {
      setFilterTags((prevState) => {
        return prevState.filter((tag) => {
          if (tag !== targetTag) {
            return tag;
          }
          return null;
        });
      });
    } else {
      setFilterTags((prevTags) => [...prevTags].concat(targetTag));
    }
  };

  const toggleStrictness = () => {
    setStrictSearch((prevState) => (prevState ? false : true));
  };

  useEffect(() => {
    document.getElementById("tagForm").reset();
    setFilterTags([]);
  }, [category, setFilterTags]);

  return (
    <aside
      style={{ width: "13vw", backgroundColor: "#28587B", padding: "10px" }}
    >
      <StoreNav />
      <form style={{ display: "flex", flexDirection: "column" }} id="tagForm">
      <h2>Filter</h2>
      <AppliedTagList appliedTags={filterTags} setFilterTags={setFilterTags} />
        <label>
          Only Show Items That Match All Tags
          <input
            type="checkBox"
            checked={strictSearch}
            onChange={toggleStrictness}
          />
        </label>
        {tagCategories.map((category) => {
          return (
            <TagCategory
              key={category}
              stock={stock}
              category={category}
              applicableTags={applicableTags}
              appliedTags={props.appliedTags}
              handleCheck={handleTagCheck}
              strictSearch={strictSearch}
            />
          );
        })}
      </form>
    </aside>
  );
};

export default ShopSideBar;
