import { Fragment } from "react";

const TagCategory = (props) => {
  const { category, applicableTags, handleCheck } = props;
  const titleStyle = {
      fontSize: '1.2em'
  }
  const tagStyle = {
      paddingLeft: '5px'
  }
  return (
    <Fragment>
      <h2 style={titleStyle}>{category.toUpperCase()}</h2>
      {applicableTags[category].map((tag) => {
        return (
          <label key={tag} style={tagStyle}>
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
