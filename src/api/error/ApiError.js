/**
 * Thrown if any error happens during an API fetch call.
 */
class ApiError extends Error {
    /**
     * @param {string} message A message about what's wrong
     * @param {Object} data A free object that contains custom data.
     */
    constructor(message, data = {}) {
        super(message);
        this.name = "ApiError";
        this.data = data;
    }
}

export default ApiError;
