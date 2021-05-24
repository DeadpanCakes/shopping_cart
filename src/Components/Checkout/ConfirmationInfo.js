const ConfirmationInfo = (props) => {
  const { category, content } = props;

  const containerStyle = { margin: 15, flex: "1 1 1" };
  const categoryStyle = { textDecoration: "underline" };
  const contentStyle = { marginLeft: 10, marginTop: 5 };
  return (
    <div style={containerStyle}>
      <h2 style={categoryStyle}>{category}</h2>
      <h3 style={contentStyle}>{content}</h3>
    </div>
  );
};

export default ConfirmationInfo;
