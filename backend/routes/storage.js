const express = require("express");
const { createItem, getItems, getItem, deleteItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage.js");
const validatorGetItem =  require("../validators/storage");
const router = express.Router();

/**
 * Cargar un archivo
 */
//dentro de single va el valor que colocamos en el postman 
router.post("/", uploadMiddleware.single("myfile"), createItem);



module.exports = router;