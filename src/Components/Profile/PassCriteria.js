import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const PassCriteria = (props) => {
  const { pass, validation } = props;
  const {
    isPassLengthValid,
    passHasUpper,
    passHasLower,
    passHasDigit,
    passHasSymbol,
  } = validation;

  const listingStyle={
      display: 'flex',
  }

  return (
    <ul>
      <li style={listingStyle}>
        <FontAwesomeIcon
          size="xs"
          icon={
            pass.length > 0
              ? validation.isPassLengthValid
                ? faCheckCircle
                : faTimesCircle
              : faCircle
          }
        />
        <p>8 or more characters {isPassLengthValid.toString()}</p>
      </li>
      <li style={listingStyle}>
        <FontAwesomeIcon
          size="xs"
          icon={
            pass.length > 0
              ? validation.passHasUpper
                ? faCheckCircle
                : faTimesCircle
              : faCircle
          }
        />
        <p>At least one capital letter {passHasUpper.toString()}</p>
      </li>
      <li style={listingStyle}>
        <FontAwesomeIcon
          size="xs"
          icon={
            pass.length > 0
              ? validation.passHasLower
                ? faCheckCircle
                : faTimesCircle
              : faCircle
          }
        />
        <p>At least one lower case character {passHasLower.toString()}</p>
      </li>
      <li style={listingStyle}>
        <FontAwesomeIcon
          size="xs"
          icon={
            pass.length > 0
              ? validation.passHasDigit
                ? faCheckCircle
                : faTimesCircle
              : faCircle
          }
        />
        <p>At least one number {passHasDigit.toString()}</p>
      </li>
      <li style={listingStyle}>
        <FontAwesomeIcon
          size="xs"
          icon={
            pass.length > 0
              ? validation.passHasDigit
                ? faCheckCircle
                : faTimesCircle
              : faCircle
          }
        />
        <p>At least one symbol {passHasSymbol.toString()}</p>
      </li>
    </ul>
  );
};

export default PassCriteria;
