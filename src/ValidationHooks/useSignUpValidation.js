const useSignUpValidation = (email, pass, verifyPass) => {
  const isEmailValid = /^[\w.]+[@][\w-.]+[.][\S]+$/gm.test(email);
  const isPassLengthValid = /\S{8,20}/.test(pass);
  const passHasUpper = /[A-Z]/.test(pass);
  const passHasLower = /[a-z]/.test(pass);
  const passHasDigit = /\d/.test(pass);
  const passHasSymbol = /\W/.test(pass);
  const isPassValid =
    isPassLengthValid &&
    passHasUpper &&
    passHasLower &&
    passHasDigit &&
    passHasSymbol;
  const isPassSame = pass === verifyPass && pass.length >= 8;
  return {
    isEmailValid,
    isPassLengthValid,
    passHasUpper,
    passHasLower,
    passHasDigit,
    passHasSymbol,
    isPassValid,
    isPassSame
  };
};

export default useSignUpValidation;
