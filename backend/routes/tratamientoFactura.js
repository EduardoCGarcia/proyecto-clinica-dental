const router = require('express').Router();

const { createTratamientoFactura } = require('../controllers/tratamientoFactura');
const validateTratamientoFacturaCreation = require('../validators/tratamiento_factura');

router.post("/", validateTratamientoFacturaCreation, createTratamientoFactura);


module.exports = router;