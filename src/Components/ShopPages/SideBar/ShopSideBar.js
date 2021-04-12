import { useEffect } from "react";
import StoreNav from "../StoreNav";
import TagCategory from "./TagCategory";
import AppliedTagList from "./AppliedTagList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

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
  const tagCategories = [
    "color",
    "water",
    "light",
    "growth",
    "propagation",
    "other",
  ];

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
    className='shopSideBar'
    >
      <StoreNav />
      <form style={{ display: "flex", flexDirection: "column" }} id="tagForm" onSubmit={(e) => e.preventDefault()}>
        <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
          <h2 style={{paddingRight: '10px'}}>Filter</h2>
          <FontAwesomeIcon icon={faTags} size={'lg'} />
          {filterTags.length>0 ? <button className='clearTagBtn' onClick={() => setFilterTags([])}>Clear All</button>: null}
        </div>
        <AppliedTagList
          appliedTags={filterTags}
          setFilterTags={setFilterTags}
        />
        <label>
          <input
            type="checkBox"
            checked={strictSearch}
            onChange={toggleStrictness}
          />
          Strict Search?
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
