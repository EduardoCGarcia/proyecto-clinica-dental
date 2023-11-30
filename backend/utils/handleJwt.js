const jwt =  require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties =  require("../utils/handlePropertiesEngine");
const propertiesKey =  getProperties();

/**
 * The `tokenSign` function is an asynchronous function that generates a JSON Web
 * Token (JWT) for a given user. It takes a `user` object as a parameter and
 * returns a signed JWT.
 * 
 * Parameters:
 * - `user` (object): The user object containing the necessary information to
 * generate the token. It should have the following properties:
 * - `id` (string): The unique identifier of the user.
 * - `role` (string): The role of the user.
 * 
 * Returns:
 * - `sign` (string): The signed JWT generated for the user.
 * 
 * Example Usage:
 * ```javascript
 * const user = {
     * id: "123456789",
     * role: "admin"
     * };
 * 
 * const token = await tokenSign(user);
 * console.log(token);
 * ```
 * 
 * Note: The function uses the `jwt.sign` method from the `jsonwebtoken` library to
 * generate the token. It signs the user object with a secret key (`JWT_SECRET`)
 * and sets an expiration time of 2 hours for the token.
 */
const tokenSign =  async(user) => {
    const sign = await jwt.sign(
    {
        [propertiesKey.id]:user[propertiesKey.id],
        role:user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h",
    });
    return sign;
};

/**
     * The `verifyToken` function is an asynchronous function that takes in a
     * `tokenJwt` parameter. It attempts to verify the `tokenJwt` using the
     * `jwt.verify` method with the `JWT_SECRET` as the secret key. If the
     * verification is successful, it returns the decoded token. If an error occurs
     * during the verification process, it returns `null`.
     */
    const verifyToken =  async(tokenJwt) => {
    try{
        return jwt.verify(tokenJwt,JWT_SECRET);
    }catch(e){
        return null;
    }
}

module.exports =  {tokenSign,verifyToken};