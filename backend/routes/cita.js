const express = require('express');
const router = express.Router();

const {
    createAppointment,
    getAppointment,
    getAppointments,
    putAppointment,
    deleteAppointment,
    getAppointmentsByDentista,
    getAppointmentsByPaciente
} = require('../controllers/cita');

const {
    validatorCreateAppoinment,
    validatorUpdateAppoinment,
    validatorFecha
} = require('../validators/cita');

const { validatorIdParam } = require("../validators/idParam");

router.get("/nuevaFecha", validatorFecha, async (req, res) => {
    try {
        const citasModel = require("../models").citasModel
        const { matchedData } = require("express-validator");
        const { fecha } = matchedData(req);

        const citas = await citasModel.findAll({
            where: {
                fecha: new Date(fecha),
            },
        });

        res.status(200).json(citas);
    } catch (error) {
        console.error("Error al obtener las citas por fecha:", error);
        res.status(500).send("Error interno del servidor");
    }
})

router.post(
    "/",
    validatorCreateAppoinment,
    createAppointment
)

router.get(
    "/:id",
    validatorIdParam,
    getAppointment
);

router.get(
    "/",
    getAppointments);

router.get(
    "/byDentista/:id",
    validatorIdParam,
    getAppointmentsByDentista);

router.get(
    "/byPaciente/:id",
    validatorIdParam,
    getAppointmentsByPaciente);


router.put(
    "/:id",
    validatorIdParam,
    validatorUpdateAppoinment,
    putAppointment
);

router.delete(
    "/:id",
    validatorIdParam,
    deleteAppointment
);


module.exports = router;