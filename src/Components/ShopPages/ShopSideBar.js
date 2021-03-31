import { useEffect, useState } from "react";
import StoreNav from "./StoreNav";
import itemTags from "../../items/itemTags";
import useTagList from "../../items/useTagList";

const ShopSideBar = (props) => {
  const { category, filterTags, setFilterTags, applicableTags } = props;
  const [appliedTags, setAppliedTags] = useState([]);

  console.log("thing:", applicableTags);

  const handleCheck = (targetTag) => {
    if (filterTags.includes(targetTag)) {
      setFilterTags((prevState) => {
        return prevState.filter((tag) => {
          if (tag !== targetTag) {
            return tag;
          }
        });
      });
    } else {
      setFilterTags((prevTags) => [...prevTags].concat(targetTag));
    }
  };

  useEffect(() => {
    document.getElementById("tagForm").reset();
    setFilterTags([]);
  }, [category]);

  return (
    <aside
      style={{ width: "13vw", backgroundColor: "#28587B", padding: "10px" }}
    >
      <StoreNav />
      <h2>Filter</h2>
      <form style={{ display: "flex", flexDirection: "column" }} id="tagForm">
        <h2>Colors</h2>
        {applicableTags.color.map((tag) => {
          return (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                onChange={(e) => handleCheck(e.target.value)}
              />
              {tag}
            </label>
          );
        })}
        <h2>Water</h2>
        {applicableTags.water.map((tag) => {
          return (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                onChange={(e) => handleCheck(e.target.value)}
              />
              {tag}
            </label>
          );
        })}
        <h2>Light</h2>
        {applicableTags.light.map((tag) => {
          return (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                onChange={(e) => handleCheck(e.target.value)}
              />
              {tag}
            </label>
          );
        })}
        <h2>Growth Habit</h2>
        {applicableTags.growth.map((tag) => {
          return (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                onChange={(e) => handleCheck(e.target.value)}
              />
              {tag}
            </label>
          );
        })}
        <h2>Propagation</h2>
        {applicableTags.prop.map((tag) => {
          return (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                onChange={(e) => handleCheck(e.target.value)}
              />
              {tag}
            </label>
          );
        })}
        <h2>Other</h2>
        {applicableTags.other.map((tag) => {
          return (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                onChange={(e) => handleCheck(e.target.value)}
              />
              {tag}
            </label>
          );
        })}
      </form>
    </aside>
  );
};

export default ShopSideBar;
