import { Fragment } from "react";
import FilterTag from './FilterTag';

const TagCategory = (props) => {
  const { category, applicableTags, handleCheck, appliedTags, strictSearch } = props;
  const titleStyle = {
      fontSize: '1.2em'
  }

  return (
    <Fragment>
      <h2 style={titleStyle}>{category.toUpperCase()}</h2>
      {applicableTags[category].map((tag) => {
        return <FilterTag key={tag} tag={tag} handleCheck={handleCheck} appliedTags={appliedTags} strictSearch={strictSearch} />
      })}
    </Fragment>
  );
};

export default TagCategory;
