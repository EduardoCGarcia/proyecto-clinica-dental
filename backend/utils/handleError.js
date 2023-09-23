/**
 * The `handleHttpError` function is used to handle HTTP errors in a JavaScript
 * application. It takes three parameters:
 * 
 * 1. `res` (required): The response object from the HTTP request.
 * 2. `message` (optional): The error message to be sent in the response. If not
 * provided, a default message of "Algo sucedio" will be used.
 * 3. `code` (optional): The HTTP status code to be set in the response. If not
 * provided, a default code of 403 (Forbidden) will be used.
 * 
 * The function sets the provided status code on the response object using the
 * `status` method, and sends a JSON response containing the error message using
 * the `send` method.
 * 
 * Example usage:
 * 
 * ```javascript
 * handleHttpError(res, 'Unauthorized', 401);
 * ```
 * 
 * This will set the status code to 401 (Unauthorized) and send a JSON response
 * with the error message "Unauthorized". If no parameters are provided, the
 * function will use the default values and send a response with a status code of
 * 403 (Forbidden) and the default error message "Algo sucedio".
 */
const handleHttpError = (res, message='Algo sucedio',code=403) => {
    res.status(code);
    res.send({error:message});
};

module.exports = {handleHttpError}; 