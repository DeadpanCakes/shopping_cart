const CommentBox = (props) => {
  const { comments } = props;

  const containerStyle = {
    overflow: "auto",
    maxWidth: 400,
    maxHeight: 80,
    minWidth: 400,
    minHeight: 80,
    backgroundColor: "#ddfff750",
    margin: 10,
    padding: 5,
  };

  return comments ? (
    <div style={containerStyle}>
      <p>{comments}</p>
    </div>
  ) : null;
};

export default CommentBox;
