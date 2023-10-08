/**
 * Checks if the object contains any key.
 * 
 * @param {Object} obj The object to verify
 * @returns {boolean} Whether the object is empty or not.
 */
const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export default isObjectEmpty;
