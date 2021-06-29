import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ValidationIcon = (props) => {
  const { inputLength, isValid, style } = props;

  const genColor = () => {
    switch (isValid) {
      case true:
        return "green";
      case false:
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        right: "5%",
        top: "50%",
        zIndex: 1,
        backgroundColor: "white",
        color: inputLength > 0 ? genColor() : "black",
      }}
    >
      {inputLength > 0 ? (
        isValid ? (
          <FontAwesomeIcon icon={faCheckCircle} style={style} />
        ) : (
          <FontAwesomeIcon icon={faTimesCircle} style={style} />
        )
      ) : (
        <FontAwesomeIcon icon={faCircle} style={style} />
      )}
    </div>
  );
};

export default ValidationIcon;
