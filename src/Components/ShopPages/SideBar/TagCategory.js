import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSeedling, faPalette, faTint, faSun, faLeaf, faAsterisk} from '@fortawesome/free-solid-svg-icons'
import FilterTag from "./FilterTag";
import { Fragment } from 'react';

const TagCategory = (props) => {
  const {
    stock,
    category,
    applicableTags,
    handleCheck,
    appliedTags,
    strictSearch,
  } = props;

  const titleStyle = {
    fontSize: "1.2em",
  };

  const determineIcon = (category) => {
    switch (category) {
      case 'color': return faPalette
      case 'water': return faTint
      case 'light': return faSun
      case 'growth': return faSeedling
      case 'propagation': return faLeaf
      default: return faAsterisk
    }
  }

  return (
    <Fragment>
      <div style={{display: 'flex'}}>
      <h2 style={titleStyle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <FontAwesomeIcon icon={determineIcon(category)} style={{paddingLeft: '3px'}} /></div>
      <ul style={{display: 'flex', flexDirection: 'column'}}>
      {applicableTags[category].map((tag) => {
        return (
          <FilterTag
            key={tag}
            stock={stock}
            tag={tag}
            handleCheck={handleCheck}
            appliedTags={appliedTags}
            strictSearch={strictSearch}
          />
        );
      })}</ul>
    </Fragment>
  );
};

export default TagCategory;
