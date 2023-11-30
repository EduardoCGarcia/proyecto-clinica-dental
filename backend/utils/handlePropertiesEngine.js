const ENGINE_DB =  process.env.ENGINE_DB;
/**
 * The `getProperties` function is a JavaScript arrow function that returns a
 * specific property from an object based on the value of the `ENGINE_DB`
 * variable.
 * 
 * The function defines a constant variable `data` which is an object containing
 * two properties: `nosql` and `mysql`. Each property is itself an object with a
 * single property `id` and its corresponding value.
 * 
 * The function then uses the `ENGINE_DB` variable as the key to access the desired
 * property from the `data` object. The value of `ENGINE_DB` should be either
 * `'nosql'` or `'mysql'`.
 * 
 * Finally, the function returns the property object based on the value of
 * `ENGINE_DB`.
 * 
 * Note: The `ENGINE_DB` variable is not defined within the function and should be
 * defined elsewhere in the code before calling the `getProperties` function.
 */
const getProperties = () => {
    /**
     * Data object.
     */
    const data = {
        nosql:{
            id:'_id'
        },
        mysql:{
            id:'id'
        }
    }
    return data[ENGINE_DB];
}

module.exports =  getProperties;