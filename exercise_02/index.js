import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import createUser from "./createUser.js";

//test with email as empty string and log result

const resultEmpty = createUser("", onError, onSuccess);
console.log(resultEmpty);

//test with email as string and log result

const resultFull = createUser("johndoe@gmail.com", onError, onSuccess);
console.log(resultFull);
