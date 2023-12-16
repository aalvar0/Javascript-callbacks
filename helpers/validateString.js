/**
 * @param {any} value
 * @returns boolean
 */
function validateString(value) {
  if (typeof value === "string" && value.trim().length > 0) {
    return true;
  }
  return false;
}
export default validateString;
