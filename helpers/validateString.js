/**
 * @param {any} value
 * @returns boolean
 */
function validateString(value) {
  if (typeof value !== "string" || value === "" || value === undefined) {
    return false;
  }
  return true;
}
export default validateString;
