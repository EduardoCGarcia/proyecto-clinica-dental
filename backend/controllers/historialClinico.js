const { matchedData } = require("express-validator");
const models = require("../models");
const historial_clinico = models.historialClinicoModel;
const Usuario = models.usersModel;
const Tratamiento = models.tratamientosModel;


const createHistorialClinico = async (req, res) => {
    try {
        const historialData = matchedData(req);
        const newHistorial = await historial_clinico.create(historialData);

        return res.status(201).send(newHistorial);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
};

const getHistoriales = async (req, res) => {
    try {

        const historialesList = await historial_clinico.findAll({
            

            include: [
                {
                    model: Usuario,
                    as: 'Paciente',
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                },
                {
                    model: Tratamiento,
                    as: 'tratamiento',
                    attributes: ['id', 'nombre', 'descripcion'],
                }
            ]
        });

        // Si no hay historiales para ese paciente, envía un mensaje adecuado
        if (historialesList.length === 0) {
            return res.status(404).send({ message: 'No se encontraron historiales clínicos para mostrar.' });
        }

        // Envía la lista de historiales como respuesta
        return res.status(200).send(historialesList);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor: " + error);
    }
};
const getHistorialesByPaciente = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const historialesList = await historial_clinico.findAll({
            where: {
                id_paciente: id
            },
            include: [
                {
                    model: Usuario,
                    as: 'paciente',
                    attributes: ['nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                },
                {
                    model: Tratamiento,
                    as: 'tratamiento',
                    attributes: ['id', 'nombre', 'descripcion'],
                }
            ]
        });

        // Si no hay historiales para ese paciente, envía un mensaje adecuado
        if (historialesList.length === 0) {
            return res.status(404).send({ message: 'No se encontraron historiales clínicos para el paciente especificado.' });
        }

        // Envía la lista de historiales como respuesta
        return res.status(200).send(historialesList);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor: " + error);
    }
};


module.exports = { createHistorialClinico, getHistorialesByPaciente, getHistoriales };