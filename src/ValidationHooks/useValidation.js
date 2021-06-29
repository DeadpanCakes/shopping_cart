const useValidation = () => {
  const checkIfFilled = (str) => /[\S]+/.test(str);

  const checkEmail = (email) => /^[\w.]+[@][\w-.]+[.][\S]+$/gm.test(email);

  const email = { checkEmail };

  const checkPassLength = (pass) => /\S{8,20}/.test(pass);
  const checkUpper = (pass) => /[A-Z]/.test(pass);
  const checkLower = (pass) => /[a-z]/.test(pass);
  const checkDigit = (pass) => /\d/.test(pass);
  const checkSymbol = (pass) => /\W/.test(pass);

  const pass = {
    checkPassLength,
    checkUpper,
    checkLower,
    checkDigit,
    checkSymbol,
  };

  const checkCardNumber = (cardNumber) => /^[\d]{13,}$/.test(cardNumber);
  const checkExpire = (date) => /^[\d]{2}\/[\d]{2}$/.test(date);
  const checkCode = (code) => /^[\d]{3,4}$/.test(code);

  const card = {
    checkCardNumber,
    checkExpire,
    checkCode,
  };

  return { checkIfFilled, email, pass, card };
};

export default useValidation;
