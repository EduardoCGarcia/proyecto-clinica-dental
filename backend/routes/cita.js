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
    validatorUpdateAppoinment
} = require('../validators/cita');

const { validatorIdParam } = require("../validators/idParam");



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