const usePaymentValidation = (cardNumber, expiration, name, code) => {
  const isNameValid = /[\S]+/.test(name);
  const isNumberValid = /^[\d]{13,}$/.test(cardNumber);
  const isExpireValid = /^[\d]{2}\/[\d]{2}$/.test(expiration);
  const isCodeValid = /^[\d]{3,4}$/.test(code);
  return { isNameValid, isNumberValid, isExpireValid, isCodeValid };
};

export default usePaymentValidation;
