import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const BillingStep = (props) => {
  const { shippingInfo, billingInfo, setBillingInfo } = props;
  const { name, country, address, zip, city, phone } = billingInfo;
  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const [checkedAsSame, setCheckedAsSame] = useState(false);
  const [isNameValid, setNameValid] = useState(false);
  const [isCountryValid, setCountryValid] = useState(false);
  const [isAddressValid, setAddressValid] = useState(false);

  useEffect(() => {
    setNameValid(/[\S]+/.test(name));
  }, [name, checkedAsSame]);

  useEffect(() => {
    setCountryValid(/[\S]+/.test(country));
  }, [country, checkedAsSame]);

  useEffect(() => {
    setAddressValid(/[\S]+/.test(address));
  }, [address, checkedAsSame]);

  useEffect(() => {
    if (isNameValid && isCountryValid && isAddressValid) {
      setBillingInfo((prevState) => {
        return { ...prevState, isValid: true };
      });
    } else {
      setBillingInfo((prevState) => {
        return {...prevState, isValid: false};
      })
    }
  }, [setBillingInfo, isNameValid, isCountryValid, isAddressValid]);

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  const handleCheck = () => {
    if (checkedAsSame) {
      setBillingInfo({
        name: "",
        country: "",
        address: "",
        zip: "",
        city: "",
        phone: "",
      });
      setCheckedAsSame((prevState) => !prevState);
    } else {
      setBillingInfo(shippingInfo);
      setCheckedAsSame((prevState) => !prevState);
    }
  };

  const labelStyle = { position: "relative" };
  const inputStyle = {
    margin: 10,
    paddingRight: 25,
  };
  const indicatorStyle = {
    position: "absolute",
  };

  return (
    <>
      <h1>Billing Info</h1>
      <label>
        <input type="checkbox" onChange={handleCheck}></input>Same As Shipping?
      </label>
      <label style={labelStyle}>
        Name*
        <input
          value={name}
          onChange={(e) => handleInput(e, setBillingInfo, "name")}
          style={inputStyle}
        ></input>
        <div
          style={{
            ...indicatorStyle,
            right: "32%",
            color: isNameValid ? "green" : "red",
          }}
        >
          {name.length > 0 ? (
            isNameValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={labelStyle}>
        Country*
        <input
          value={country}
          onChange={(e) => handleInput(e, setBillingInfo, "country")}
          style={inputStyle}
        ></input>
        <div
          style={{
            ...indicatorStyle,
            right: "25%",
            color: isCountryValid ? "green" : "red",
          }}
        >
          {country.length > 0 ? (
            isCountryValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label style={labelStyle}>
        Address*
        <textarea
          value={address}
          onChange={(e) => handleInput(e, setBillingInfo, "address")}
          style={inputStyle}
        ></textarea>
        <div
          style={{
            ...indicatorStyle,
            top: "20%",
            right: "18%",
            color: isAddressValid ? "green" : "red",
          }}
        >
          {address.length > 0 ? (
            isAddressValid ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )
          ) : null}
        </div>
      </label>
      <label>
        ZIP/Postal
        <input
          value={zip}
          onChange={(e) => handleInput(e, setBillingInfo, "zip")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        City
        <input
          value={city}
          onChange={(e) => handleInput(e, setBillingInfo, "city")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Phone Number
        <input
          value={phone}
          onChange={(e) => handleInput(e, setBillingInfo, "phone")}
          style={inputStyle}
        ></input>
      </label>
    </>
  );
};

export default BillingStep;
