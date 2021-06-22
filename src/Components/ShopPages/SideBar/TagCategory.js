import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faPalette,
  faTint,
  faSun,
  faLeaf,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import FilterTag from "./FilterTag";

const TagCategory = (props) => {
  const {
    stock,
    category,
    applicableTags,
    handleCheck,
    appliedTags,
    strictSearch,
  } = props;

  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prevState) => !prevState);

  const titleStyle = {
    fontSize: "1.2em",
  };

  const determineIcon = (category) => {
    switch (category) {
      case "color":
        return faPalette;
      case "water":
        return faTint;
      case "light":
        return faSun;
      case "growth":
        return faSeedling;
      case "propagation":
        return faLeaf;
      default:
        return faAsterisk;
    }
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: "max-height 300ms ease-in-out",
  };

  const collapsedList = {
    ...listStyle,
    maxHeight: 0,
  };

  const expandedList = {
    ...listStyle,
    maxHeight: 1000,
  };

  return (
    <div>
      <button onClick={toggleExpand} style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={titleStyle}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <FontAwesomeIcon
          icon={determineIcon(category)}
          style={{ paddingLeft: "3px" }}
          size="lg"
        />
      </button>
      <ul style={isExpanded ? expandedList : collapsedList}>
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
        })}
      </ul>
    </div>
  );
};

export default TagCategory;
