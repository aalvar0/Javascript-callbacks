/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 * It receives a string and returns an array with all words contained in it
 * @param {String} value
 * @returns {Array}
 */
function onSuccess(value) {
  const words = value.split(/\s+/);
  return words;
}

export default onSuccess;
