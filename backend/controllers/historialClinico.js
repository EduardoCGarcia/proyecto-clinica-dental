const { matchedData } = require("express-validator");
const models = require("../models");
const historial_clinico = models.historialClinicoModel;


const createHistorialClinico = async (req, res) => {
    try {
        const historialData = matchedData(req);
        const newHistorial = await historial_clinico.create(historialData);

        return res.status(201).send(newHistorial);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
};

const getHistorialesByPaciente = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const historialesList = await historial_clinico.findAll({
            where: {
                id_paciente: id
            }
        });

        // Si no hay historiales para ese paciente, envía un mensaje adecuado
        if (historialesList.length === 0) {
            return res.status(404).send({ message: 'No se encontraron historiales clínicos para el paciente especificado.' });
        }

        // Envía la lista de historiales como respuesta
        return res.status(200).send(historialesList);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
};


module.exports = { createHistorialClinico, getHistorialesByPaciente };