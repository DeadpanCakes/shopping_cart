import {useState} from 'react';

const useValidation = () => {
    const [valid, setValid] = useState(false);

    const passPattern = /^(?=.*?[\d])(?=.*?[[:punct:]])[\w[:punct:]]$/;
    const requiredPattern = /.+/;

    const validate = (str, test) => {
        setValid(test(str));
    }

    const validatePass = (str) => validate(str, passPattern.test);
    const validateRequired = (str) => validate(str, requiredPattern.test);

    return {valid, validatePass, validateRequired};
}

export default useValidation