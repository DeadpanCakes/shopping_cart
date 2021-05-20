import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ShippingStep = (props) => {
  const { shippingInfo, setShippingInfo } = props;
  const { name, country, address, zip, city, phone } = shippingInfo;

  const [isNameValid, setNameValid] = useState(false);
  const [isCountryValid, setCountryValid] = useState(false);
  const [isAddressValid, setAddressValid] = useState(false);

  useEffect(() => {
    setNameValid(/[\S]+/.test(name));
  }, [name]);

  useEffect(() => {
    setCountryValid(/[\S]+/.test(country));
  }, [country]);

  useEffect(() => {
    setAddressValid(/[\S]+/.test(address));
  }, [address]);

  const updateState = (setState, field, value) => {
    setState((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  useEffect(() => {
    if (isNameValid && isCountryValid && isAddressValid) {
      setShippingInfo((prevState) => {
        return { ...prevState, isValid: true };
      });
    } else {
      setShippingInfo((prevState) => {
        return { ...prevState, isValid: false }
      })
    }
  }, [setShippingInfo ,isNameValid, isCountryValid, isAddressValid]);

  const handleInput = (event, setState, field) => {
    updateState(setState, field, event.target.value);
  };

  const inputStyle = {
    margin: 10,
    paddingRight: 25,
  };
  return (
    <>
      <h1>Shipping Info</h1>
      <label style={{ position: "relative" }}>
        Name*
        <input
          value={name}
          onChange={(e) => handleInput(e, setShippingInfo, "name")}
          style={inputStyle}
        ></input>
        <div
          style={{
            position: "absolute",
            right: "39%",
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
      <label style={{ position: "relative" }}>
        Country*
        <input
          value={country}
          onChange={(e) => handleInput(e, setShippingInfo, "country")}
          style={inputStyle}
        ></input>
        <div
          style={{
            position: "absolute",
            right: "36%",
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
      <label style={{ position: "relative" }}>
        Address*
        <textarea
          value={address}
          onChange={(e) => handleInput(e, setShippingInfo, "address")}
          style={inputStyle}
        ></textarea>
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "28%",
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
          onChange={(e) => handleInput(e, setShippingInfo, "zip")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        City
        <input
          value={city}
          onChange={(e) => handleInput(e, setShippingInfo, "city")}
          style={inputStyle}
        ></input>
      </label>
      <label>
        Phone Number
        <input
          value={phone}
          onChange={(e) => handleInput(e, setShippingInfo, "phone")}
          style={inputStyle}
        ></input>
      </label>
    </>
  );
};

export default ShippingStep;
