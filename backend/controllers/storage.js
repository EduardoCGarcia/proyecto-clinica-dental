const fs = require("fs");

const models = require("../models")
const  storageModel = models.storageModel;
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");


const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`


const getItems = async (req, res) => {
    try {
        const data = await storageModel.findAll();
        res.send({ data });
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
};


const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;

        const data = await storageModel.findByPk(id);

        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};


const createItem = async (req, res) => {
    try {
        const { file } = req;

        /**
             * FileData object.
             */
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }

        const data =  await storageModel.create(fileData);
        //Los controladores siempre deben retornar algo de lo contrario lse queda colgada la aplicación
        res.send({data});
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_CREATE_ITEM");
    }
};



const deleteItem = async (req, res) => {
    //TODO Eliminar el file de la base de datos y del sistema de archivos
    try {
        const { id } = matchedData(req);
        
        // Buscar el archivo por ID
        const dataFile = await storageModel.findByPk(id); 

        // Si no se encuentra el archivo, enviar un error
        if (!dataFile) {
            return res.status(404).send({ message: "Archivo no encontrado" });
        }

        const { filename } = dataFile;

        // Eliminar el archivo
        await dataFile.destroy();

        const filePath = `${MEDIA_PATH}/${filename}`;

        const data = {
            filePath,
            deleted: 1
        };

        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
};



module.exports = { getItems, getItem, createItem, deleteItem };