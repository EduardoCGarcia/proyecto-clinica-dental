const {Sequelize} = require("sequelize");

const database =  process.env.MISQL_DATABASE;
const userName =  process.env.MISQL_USER;
const password =  process.env.MISQL_PASSWORD;
const host =  process.env.MISQL_HOST;

const sequelize = new Sequelize(
    database,
    userName,
    password,
    {
        host,
        dialect:"mysql"
    }
);

/**
 * This is a JavaScript method named `dbConnectMySql` that establishes a connection
 * to a MySQL database using Sequelize. It is an asynchronous function that
 * returns a Promise.
 * 
 * The method attempts to authenticate the connection by calling the `authenticate`
 * method of the `sequelize` object. If the authentication is successful, it logs
 * the message "***** MYSQL CONEXIÓN CORRECTA *****" to the console. If there is
 * an error during the authentication process, it logs the error message to the
 * console as "*****MYSQL ERROR DE CONEXION*****".
 * 
 * Note: The method assumes that the `sequelize` object is already defined and
 * configured properly.
 */
const dbConnectMySql =  async () => {
    try {
        await sequelize.authenticate(
            console.log("***** MYSQL CONEXIÓN CORRECTA *****")
        )
    } catch (error) {
        console.log("*****MYSQL ERROR DE CONEXION*****", error);
    }
};


module.exports =  {sequelize, dbConnectMySql};