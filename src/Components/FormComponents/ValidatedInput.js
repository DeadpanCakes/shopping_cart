import RelativeWrapper from "../WrapperComponents/RelativeWrapper";
import LabeledInput from "./LabeledInput";
import ValidationIcon from "./ValidationIcon";

const ValidatedInput = (props) => {
  const {label, value, inputHandler, isValid, type} = props

  return (
    <RelativeWrapper>
        <LabeledInput label={label} value={value} inputHandler={inputHandler} type={type}/>
        <ValidationIcon inputLength={value.length} isValid={isValid} />
    </RelativeWrapper>
  );
};

export default ValidatedInput;
