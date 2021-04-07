const TagIcon = (props) => {
  const { tagName, setFilterTags } = props;

  const deleteTag = () => {
    setFilterTags((prevState) => prevState.filter((tag) => tag !== tagName));
  };

  const containerStyle = {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#FFE900",
    borderRadius: '3px',
    margin: '2px'
  };

  const tagStyle = {
    color: "#2A2B2A",
    padding: "1px 2px",
    textAlign: 'center'
  };

  const buttonStyle = {
      border: '0',
      backgroundColor: 'inherit',
      padding: '5px'
  }

  return (
    <div style={containerStyle}>
      <p className="tagIndicator" style={tagStyle}>
        {tagName}
      </p>
      <button onClick={deleteTag} style={buttonStyle}>X</button>
    </div>
  );
};

export default TagIcon;
