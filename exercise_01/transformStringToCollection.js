import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";
//test with value as number and log result

const resultNumber = transformStringToArray(12, onError, onSuccess);
console.log(resultNumber);

//test with value as array and log result

const resultArray = transformStringToArray([1, 2, "enjoy"], onError, onSuccess);
console.log(resultArray);

//test with value as boolean and log result

const resultBoolean = transformStringToArray(true, onError, onSuccess);
console.log(resultBoolean);

//test with value as empty string and log result

const resultEmptyString = transformStringToArray("", onError, onSuccess);
console.log(resultEmptyString);

//test with value as string and log result

const resultString = transformStringToArray(
  "Mi nombre es Alvaro",
  onError,
  onSuccess
);
console.log(resultString);
