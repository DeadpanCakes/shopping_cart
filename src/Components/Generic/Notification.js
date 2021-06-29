const Notification = (props) => {
  const notificationStyle = {
      maxWidth: '90%',
      minWidth: '20%',
      borderRadius: 10,
      padding: '13px 5px',
      textAlign: 'center'
  };

  const genStyle = () => {
    switch (props.notificationType) {
      case "confirmation":
        return {backgroundColor: 'lightgreen', border: '2px solid darkgreen', color: 'darkgreen'};
      case "error":
        return {backgroundColor: 'lightcoral', border: '2px solid darkred', color: 'darkred'};
      default:
        return {backgroundColor: 'white', border: '2px solid black', color: 'black'};
    }
  };

  return (
    <div style={{...notificationStyle, ...genStyle()}}>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
