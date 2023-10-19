const fs = require("fs");

const { storageModel } = require('../models');
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { log } = require("console");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`


const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
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

        const data = await storageModel.findById(id);

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

        res.send({ fileData })
        //const data =  await storageModel.create(fileData);
        //Los controladores siempre deben retornar algo de lo contrario lse queda colgada la aplicación
        //res.send({data});
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_CREATE_ITEM");
    }
};



const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne({ _id: id });
        await storageModel.delete({ _id: id });
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;

        /**
                 * Data object.
                 */

        const data = {
            filePath,
            deleted: 1
        }

        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
};


module.exports = { getItems, getItem, createItem, deleteItem };