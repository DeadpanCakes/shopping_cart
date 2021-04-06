import TagIcon from './TagIcon';

const AppliedTagList = (props) => {
    const {appliedTags, setFilterTags} = props;


    return (
        <ul>
            {appliedTags.map((tag) => {
                return (
                    <li key={tag}>
                        <TagIcon tagName={tag} setFilterTags={setFilterTags}/>
                    </li>
                )
            })}
        </ul>
    )
}