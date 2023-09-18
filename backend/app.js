require('dotenv').config();
const express = require('express');

const dbConection = require('./config/mysql');

const PORT = process.env.PORT;
const app = express();


app.get('/', function (req, res) {
    res.send('Hello World')
})

const startServer = async () => {
    await dbConection()
    app.listen(PORT, ()=> {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    })
}

startServer();