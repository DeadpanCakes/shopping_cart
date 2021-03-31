import { Fragment } from "react";
import FilterTag from './FilterTag';

const TagCategory = (props) => {
  const { category, applicableTags, handleCheck, appliedTags } = props;
  const titleStyle = {
      fontSize: '1.2em'
  }

  return (
    <Fragment>
      <h2 style={titleStyle}>{category.toUpperCase()}</h2>
      {applicableTags[category].map((tag) => {
        return <FilterTag tag={tag} handleCheck={handleCheck} appliedTags={appliedTags} />
      })}
    </Fragment>
  );
};

export default TagCategory;
