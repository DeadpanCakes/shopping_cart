import { useState } from "react";

const AddressForm = (props) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const { user, editUser, toggleEdit, section } = props;

  const handleInput = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "zip":
        setZip(value);
        break;
      case "city":
        setCity(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        throw new Error("Invalid Field");
    }
  };

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
        handleSubmit(user.loggedUser.id, section,{
          name: name,
          country: country,
          address: address,
          zip: zip,
          city: city,
          phone: phone,
        });
      }}
    >
      <label>
        Name
        <input
          value={name}
          onChange={(e) => {
            handleInput("name", e.target.value);
          }}
        ></input>
      </label>
      <label>
        Country
        <input
          value={country}
          onChange={(e) => {
            handleInput("country", e.target.value);
          }}
        ></input>
      </label>
      <label>
        Address
        <input
          value={address}
          onChange={(e) => {
            handleInput("address", e.target.value);
          }}
        ></input>
      </label>
      <label>
        Zip
        <input
          value={zip}
          onChange={(e) => {
            handleInput("zip", e.target.value);
          }}
        ></input>
      </label>
      <label>
        City
        <input
          value={city}
          onChange={(e) => {
            handleInput("city", e.target.value);
          }}
        ></input>
      </label>
      <label>
        Phone
        <input
          value={phone}
          onChange={(e) => {
            handleInput("phone", e.target.value);
          }}
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default AddressForm;
