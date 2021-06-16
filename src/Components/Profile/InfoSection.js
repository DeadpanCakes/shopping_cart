import PaymentForm from "./PaymentForm";

const InfoSection = (props) => {
  const { section, info, isBeingEdited, user, editUser, toggleEdit, test} = props;
  //Create an arr of objects, one per key:value pair
  const infoArr = (() => {
    const arr = [];
    for (const prop in info) {
      arr.push({ [prop]: info[prop] });
    }
    return arr;
  })();

  const fetchEditForm = (section) => {
    switch (section) {
      case "Payment":
        return <PaymentForm user={user} editUser={editUser} toggleEdit={toggleEdit} />;
      default:
        console.log(section);
        return <p>{section}</p>;
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>{section}</h1>
        <button onClick={toggleEdit}>Edit</button>
      </div>
      {isBeingEdited ? (
        fetchEditForm(section)
      ) : (
        <section>
          {infoArr.map((info) => {
            const keyName = Object.keys(info)[0];
            return <p>{`${keyName}: ${info[keyName]}`}</p>;
          })}
        </section>
      )}
      <button onClick={() => console.log(test)}>check</button>
    </div>
  );
};

export default InfoSection;
