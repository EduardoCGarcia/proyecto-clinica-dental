require('dotenv').config();
const express = require('express');
const cors = require("cors");

const {dbConnectMySql} = require('./config/mysql');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());



app.use(express.static("storage"));


app.use("/api", require('./routes'));

/**
 * The `startServer` function is an asynchronous function that starts the server.
 * It first connects to a MySQL database using the `dbConnectMySql` function, and
 * then listens for incoming requests on the specified `PORT`. Once the server is
 * running, it logs a message to the console indicating the server's URL.
 */
const startServer = async () => {
    await dbConnectMySql()
    /**
     * This method logs a message indicating that the server is running on the
     * specified localhost port. The message is displayed in the console.
     */
    app.listen(PORT, ()=> {
        console.log(`Servidor corriendo en http:18.224.39.140:${PORT}`);
    })
}

startServer();