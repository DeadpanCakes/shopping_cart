const TagIcon = (props) => {
  const { tagName, setFilterTags } = props;

  const deleteTag = () => {
      setFilterTags(prevState => prevState.filter((tag) => tag !== tagName))
  }

  const tagStyle = {
    color: "#2A2B2A",
    backgroundColor: "#FFE900",
    padding: "1px 2px",
  };

  return (
    <div>
      <p className="tagIndicator" tagStyle={tagStyle}>
        {tagName}
      </p>
      <button onClick={deleteTag}>X</button>
    </div>
  );
};

export default TagIcon;
