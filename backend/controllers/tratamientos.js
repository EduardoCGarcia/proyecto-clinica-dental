const { matchedData } = require("express-validator");

const models = require("../models");
const tratamientosModel = models.tratamientosModel;


const getTratamiento = async (req, res) => {
    try {

        const { id } = matchedData(req);

        const dataTratamiento =  await tratamientosModel.findByPk(id)

        if (!dataTratamiento) {
            return res.status(404).send({message: 'Tratamiento no encontrado'});
        }

        return res.status(200).send(dataTratamiento);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}

const getTratamientos = async (req, res) => {
    try {
        
        const dataTratamientos =  await tratamientosModel.findAll()

        return res.status(200).send(dataTratamientos);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}

module.exports = { getTratamiento, getTratamientos }