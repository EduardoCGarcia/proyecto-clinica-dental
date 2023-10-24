const express = require('express');
const router = express.Router();

const { 
    createAppointment, 
    getAppointment, 
    getAppointments, 
    putAppointment, 
    deleteAppointment 
} = require('../controllers/cita');

const { 
    validatorCreateAppoinment, 
    validatorUpdateAppoinment 
} = require('../validators/cita');

const validatorIdParam = require("../validators/idParam");



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


module.exports  = router;