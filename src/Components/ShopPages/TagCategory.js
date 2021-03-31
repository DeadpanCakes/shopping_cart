import { Fragment } from "react";

const TagCategory = (props) => {
  const { category, applicableTags, handleCheck } = props;
  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      {applicableTags[category].map((tag) => {
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
    </Fragment>
  );
};

export default TagCategory;
