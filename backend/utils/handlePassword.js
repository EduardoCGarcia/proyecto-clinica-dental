const bcrypt =  require("bcrypt");

/**
 * The `encrypt` function is an asynchronous function that takes in a plain
 * password as a parameter and returns a hashed password using the bcrypt library.
 * The function uses the `bcrypt.hash` method to generate the hash with a cost
 * factor of 10. The function returns the hashed password as a result.
 */
const encrypt = async(passwordPlain) => {
     const hash = await bcrypt.hash(passwordPlain,10);
    return hash;
};

/**
     * The `compare` function is an asynchronous function that takes in two parameters:
     * `passwordPlain` and `hashPassword`. It uses the `bcrypt.compare` method to
     * compare the plain password (`passwordPlain`) with the hashed password
     * (`hashPassword`).
     * 
     * The function returns a promise that resolves to a boolean value indicating
     * whether the plain password matches the hashed password.
     */
const compare = async(passwordPlain,hashPassword) => {
    return await bcrypt.compare(passwordPlain,hashPassword )
};

module.exports =  { encrypt,compare };