const express = require('express');
const router = express.Router();

const { validatorCreateAppoinment } = require('../validators/cita');
const { createAppointment } = require('../controllers/cita');

router.post("/", validatorCreateAppoinment, createAppointment)

module.exports  = router;