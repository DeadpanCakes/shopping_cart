import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const InfoSection = (props) => {
  const { section, info, isBeingEdited, user, editUser, toggleEdit} =
    props;
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
      case "Shipping":
        return (
          <AddressForm
            user={user}
            editUser={editUser}
            toggleEdit={toggleEdit}
            section={section}
          />
        );
      case "Billing":
        return (
          <AddressForm
            user={user}
            editUser={editUser}
            toggleEdit={toggleEdit}
            section={section}
          />
        );
      case "Payment":
        return (
          <PaymentForm
            user={user}
            editUser={editUser}
            toggleEdit={toggleEdit}
          />
        );
      default:
        console.log(section);
        return <p>{section}</p>;
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>{section}</h1>
        <button onClick={toggleEdit} style={{height: '60%'}}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      {isBeingEdited ? (
        fetchEditForm(section)
      ) : (
        <section>
          {infoArr.map((info) => {
            const keyName = Object.keys(info)[0];
            return <p key={keyName}>{`${keyName}: ${info[keyName]}`}</p>;
          })}
        </section>
      )}
    </div>
  );
};

export default InfoSection;
