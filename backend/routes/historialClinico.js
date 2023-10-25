const router =  require('express').Router();

const { createHistorialClinico, getHistorialesByPaciente } = require('../controllers/historialClinico');
const { validatorAddToHistorialClinico } = require('../validators/historialClinico');
const { validatorIdParam } = require('../validators/idParam');


router.post("/", validatorAddToHistorialClinico, createHistorialClinico);

router.get("/:id", validatorIdParam, getHistorialesByPaciente);

module.exports = router;