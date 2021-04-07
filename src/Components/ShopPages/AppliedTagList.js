import TagIcon from "./TagIcon";

const AppliedTagList = (props) => {
  const { appliedTags, setFilterTags } = props;

  const listStyle = {
      display: 'flex',
      flexWrap: 'wrap'
  };

  return (
    <ul style={listStyle}>
      {appliedTags.map((tag) => {
        return (
          <li key={tag}>
            <TagIcon tagName={tag} setFilterTags={setFilterTags} />
          </li>
        );
      })}
    </ul>
  );
};

export default AppliedTagList;
