const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");

const { handleHttpError } = require("../utils/handleError")
const { tokenSign, verifyToken } = require("../utils/handleJwt")
const { usersModel } = require("../models")

/**
 * The `signUp` function is an asynchronous function that handles the sign-up
 * process for a user. It takes in a request object (`req`) and a response object
 * (`res`) as parameters.
 * 
 * The function first tries to extract the validated data from the request object
 * using the `matchedData` function. This function ensures that only the validated
 * data is used for further processing.
 * 
 * Next, the function encrypts the password using the `encrypt` function, which is
 * assumed to be defined elsewhere. The encrypted password is then added to the
 * request body.
 * 
 * The function then creates a new user record in the database using the `create`
 * method of the `usersModel`. The `body` object, which contains the user data
 * including the encrypted password, is passed as an argument to the `create`
 * method.
 * 
 * After creating the user record, the function removes the password field from the
 * `dataUser` object using the `set` method with the `strict` option set to
 * `false`. This ensures that the password is not included in the response sent
 * back to the client.
 * 
 * Finally, the function generates a token for the user using the `tokenSign`
 * function, which is assumed to be defined elsewhere. The token and the user data
 * are then sent back as a response to the client.
 * 
 * If any error occurs during the sign-up process, an error message is logged to
 * the console using `console.error`, and a 500 Internal Server Error response is
 * sent back to the client.
 */
const signUp = async (req, res) => {
    try {
        req = matchedData(req);

        const password = await encrypt(req.password);
        /**
     * Body object.
     */
    const body = { ...req, password: password };
        
        const dataUser = await usersModel.create(body);
        
        dataUser.set('password', undefined, { strict: false })

          /**
     * Data object.
     */
    const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        } 


        res.send({ data: data });

    } catch (error) {
        console.error('Error during signUp: ', error); // Cambia a console.error para diferenciar errores en tus logs
        res.status(500).send({ message: "Ha ocurrido un error interno. Por favor, intenta nuevamente más tarde." });
    }
}

/**
     * Logs in a user.
     *
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the login process is complete.
     * @throws {Error} - If an error occurs during the login process.
     */
    const logIn = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ where: { email: req.email } });
        
        if (!user) {
            handleHttpError(res, "USER_NOT_EXIST", 404);
            return;
        }

        const hashPassword = user.get('password');

        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return;
        }

        user.set('password', undefined,{strict:false});

        /**
         * Data object.
         */
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send(data);

    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_LOGIN_USER");
    }
}



module.exports = { signUp, logIn };