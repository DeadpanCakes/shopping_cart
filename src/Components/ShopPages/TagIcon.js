const TagIcon = (props) => {
  const { tagName, setFilterTags } = props;

  const deleteTag = () => {
    setFilterTags((prevState) => prevState.filter((tag) => tag !== tagName));
  };

  const containerStyle = {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#507DBC",
    borderRadius: '3px',
    margin: '2px',
    padding: '0 3px'
  };

  const tagStyle = {
    color: "white",
    padding: "1px 2px",
    textAlign: 'center'
  };

  const buttonStyle = {
      border: '0',
      color: 'white',
      backgroundColor: 'inherit',
      padding: '5px'
  }

  return (
    <div style={containerStyle}>
      <p className="tagIndicator" style={tagStyle}>
        {tagName}
      </p>
      <button className='deleteTagBtn' onClick={deleteTag} style={buttonStyle}>X</button>
    </div>
  );
};

export default TagIcon;
