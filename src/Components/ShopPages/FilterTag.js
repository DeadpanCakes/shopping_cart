import useStock from "../../items/itemHooks/useStock";
import { useState, useEffect } from "react";

const FilterTag = (props) => {
  const { tag, handleCheck, appliedTags } = props;
  const [isDisabled, setIsDisabled] = useState(false);

  const tagStyle = {
    paddingLeft: "5px",
  };
  const disabledStyle = {
    paddingLeft: "5px",
    color: "gray",
    textDecoration: "line-through",
  };

  const stock = useStock();

  useEffect(() => {
    const checkIfImpossible = () => {
      return stock.every((item) => {
        return !(
          item.tags.all.includes(tag) &&
          appliedTags.every((tag) => item.tags.all.includes(tag))
        );
      });
    };

    setIsDisabled(checkIfImpossible());
  }, [appliedTags, stock, tag]);

  return (
    <label key={tag} style={isDisabled ? disabledStyle : tagStyle}>
      <input
        type="checkbox"
        disabled={isDisabled}
        value={tag}
        onChange={(e) => handleCheck(e.target.value)}
      />
      {tag}
    </label>
  );
};

export default FilterTag;
