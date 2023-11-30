const router =  require('express').Router();

const { createHistorialClinico, getHistorialesByPaciente, getHistoriales } = require('../controllers/historialClinico');
const { validatorAddToHistorialClinico } = require('../validators/historialClinico');
const { validatorIdParam } = require('../validators/idParam');


router.post("/", validatorAddToHistorialClinico, createHistorialClinico);

router.get("/", getHistoriales);

router.get("/:id", validatorIdParam, getHistorialesByPaciente);

module.exports = router;