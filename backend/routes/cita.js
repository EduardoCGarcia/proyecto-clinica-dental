const express = require('express');
const router = express.Router();

const {
    createAppointment,
    getAppointment,
    getAppointments,
    putAppointment,
    deleteAppointment,
    getAppointmentsByDentista,
    getAppointmentsByPaciente,
    getApoinmentsFecha,
    getAppointmentsByMotivo
} = require('../controllers/cita');

const {
    validatorCreateAppoinment,
    validatorUpdateAppoinment,
    validatorGetFecha,
    validatorRolAppoinment
} = require('../validators/cita');

const { validatorIdParam } = require("../validators/idParam");



router.get(
    "/byDentista/:id",
    validatorIdParam,
    getAppointmentsByDentista);

router.get(
    "/byPaciente/:id",
    validatorIdParam,
    getAppointmentsByPaciente);

router.get(
    "/fecha",
    validatorGetFecha,
    getApoinmentsFecha);


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
        "/byRolConsulta/:rol_consulta",
        validatorRolAppoinment,
        getAppointmentsByMotivo);

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