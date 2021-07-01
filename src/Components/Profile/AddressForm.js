import { useState, useEffect } from "react";
import ValidatedInput from "../FormComponents/ValidatedInput";
import LabeledInput from "../FormComponents/LabeledInput";
import Notification from "../Generic/Notification";

const AddressForm = (props) => {
  const { user, editUser, toggleEdit, section, info } = props;
  console.log(info);

  const [name, setName] = useState(info.name ? info.name : "");
  const [isNameValid, setNameValid] = useState(false);
  const [country, setCountry] = useState(info.country ? info.country : "");
  const [isCountryValid, setCountryValid] = useState(false);
  const [address, setAddress] = useState(info.address ? info.address : "");
  const [isAddressValid, setAddressValid] = useState(false);
  const [zip, setZip] = useState(info.zip ? info.zip : "");
  const [city, setCity] = useState(info.city ? info.city : "");
  const [phone, setPhone] = useState(info.phone ? info.phone : "");
  const [isFormValid, setFormValid] = useState(false);
  const [message, setMessage] = useState("");
  const genMessage = () => {
    setMessage("Please check that you have filled out all marked fields");
    setTimeout(() => setMessage(""), 2000);
  };

  useEffect(() => {
    const validation = /[\S]+/;
    setNameValid(validation.test(name));
    setCountryValid(validation.test(country));
    setAddressValid(validation.test(address));
  }, [name, country, address]);

  useEffect(() => {
    setFormValid(isNameValid && isCountryValid && isAddressValid);
  }, [isNameValid, isCountryValid, isAddressValid]);

  const handleSubmit = (userId, section, newData) => {
    let fieldEdited;
    switch (section) {
      case "Shipping":
        fieldEdited = "editShipping";
        break;
      case "Billing":
        fieldEdited = "editBilling";
        break;
      default:
        fieldEdited = "editShipping";
        break;
    }
    editUser(userId, fieldEdited, newData);
    toggleEdit();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isFormValid) {
          handleSubmit(user.loggedUser.id, section, {
            name: name,
            country: country,
            address: address,
            zip: zip,
            city: city,
            phone: phone,
          });
        } else {
          genMessage();
        }
      }}
    >
      <ValidatedInput
        label="Name"
        value={name}
        inputHandler={setName}
        isValid={isNameValid}
      />
      <ValidatedInput
        label="Country"
        value={country}
        inputHandler={setCountry}
        isValid={isCountryValid}
      />
      <ValidatedInput
        label="Address"
        value={address}
        inputHandler={setAddress}
        isValid={isAddressValid}
      />
      <LabeledInput label="ZIP" value={zip} inputHandler={setZip} />
      <LabeledInput label="City" value={city} inputHandler={setCity} />
      <LabeledInput label="Phone" value={phone} inputHandler={setPhone} />
      <button>Submit</button>
      {message ? (
        <Notification
          message={message}
          notificationType="error"
          miscStyle={{ position: "absolute" }}
        />
      ) : null}
    </form>
  );
};

export default AddressForm;
