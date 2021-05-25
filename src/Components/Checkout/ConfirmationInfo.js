const ConfirmationInfo = (props) => {
  const { category, content } = props;

  const containerStyle = { margin: 15, maxWidth: 150 };
  const categoryStyle = { textDecoration: "underline" };
  const contentStyle = { marginLeft: 10, marginTop: 5, overflow: 'auto' };
  return content.length > 0 ? (
    <div style={containerStyle}>
      <h2 style={categoryStyle}>{category}</h2>
      <h3 style={contentStyle}>{content}</h3>
    </div>
  ) : null
};

export default ConfirmationInfo;
