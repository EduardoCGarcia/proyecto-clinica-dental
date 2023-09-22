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

const startServer = async () => {
    await dbConnectMySql()
    app.listen(PORT, ()=> {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    })
}

startServer();