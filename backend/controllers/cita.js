const { matchedData } = require("express-validator");
const models = require("../models");
const citasModel = models.citasModel;


const createCita = async (req, res) => {
    try {
        req = matchedData(req);
        const cita = req;
        const data = await citasModel.create();

    } catch (error) {

    }
}


module.exports = { createCita }