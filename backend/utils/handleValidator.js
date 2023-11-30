const { validationResult } = require('express-validator');

/**
 * The `validateResults` function is a middleware function that is used to validate
 * the results of a request. It takes in three parameters: `req`, `res`, and
 * `next`, which represent the request object, response object, and the next
 * middleware function respectively.
 * 
 * The function first tries to validate the results of the request using the
 * `validationResult` function. If the validation fails, an error is thrown. The
 * `throw()` method is called on the error object to propagate the error to the
 * error handling middleware.
 * 
 * If the validation is successful, the function calls the `next()` function to
 * pass control to the next middleware in the chain.
 * 
 * In case of an error, the function sets the response status code to 403
 * (Forbidden) and sends a JSON response containing the errors array from the
 * error object.
 * 
 * This middleware function can be used to handle request validation errors and
 * send appropriate responses to the client.
 */
const validateResults  = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.send({ errors: error.array() })
    }
}

module.exports = validateResults ;