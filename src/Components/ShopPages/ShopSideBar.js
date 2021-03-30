import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StoreNav from './StoreNav';

const ShopSideBar = (props) => {
  const { category, filterTags, setFilterTags, applicableTags } = props;
  const [appliedTags, setAppliedTags] = useState([]);

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
        {applicableTags.map((tag) => {
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
      <button onClick={() => console.log(appliedTags)}>Check</button>
    </aside>
  );
};

export default ShopSideBar;