import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const StoreNav = () => {
  const tagArr = ["Drought Resistant", "Low Light", "Overwater Resistant"];
  const [appliedTags, setAppliedTags] = useState([]);

  const handleCheck = (targetTag) => {
    if (appliedTags.includes(targetTag)) {
      setAppliedTags((prevState) => {
        return prevState.filter((tag) => {
          return tag === targetTag
          ? null
          : tag
        })
      })
    } else {
      setAppliedTags([...appliedTags].concat(targetTag));
    }
  };

  return (
    <aside
      style={{ width: "13vw", backgroundColor: "#28587B", padding: "10px" }}
    >
      <Link to="/shop">Go Back</Link>
      <h2>Navigation</h2>
      <nav>
        <ul>
          <Link to="/shop/allplants">
            <li>
              <h2>All Plants</h2>
            </li>
          </Link>
          <Link to="/shop/houseplants">
            <li>
              <h2>Housplants</h2>
            </li>
          </Link>
          <Link to="/shop/succulents">
            <li>
              <h2>Succulents</h2>
            </li>
          </Link>
          <Link to="/shop/tillandsia">
            <li>
              <h2>Tillandsia</h2>
            </li>
          </Link>
          <Link to="/shop/supplies">
            <li>
              <h2>Supplies</h2>
            </li>
          </Link>
        </ul>
      </nav>
      <h2>Filter</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        {tagArr.map((tag) => {
          return (
            <label key={tag}>
              <input type="checkbox" value={tag} onChange={(e) => handleCheck(e.target.value)}/>
              {tag}
            </label>
          );
        })}
      </form>
      <button onClick={() => console.log(appliedTags)}>Check</button>
    </aside>
  );
};

export default StoreNav;
