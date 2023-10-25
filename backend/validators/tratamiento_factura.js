const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validateTratamientoFacturaCreation = [
    check('id_factura')
        .isInt()
        .withMessage('El ID de la factura debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID de la factura es requerido'),

    check('id_tratamiento')
        .isInt()
        .withMessage('El ID del tratamiento debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID del tratamiento es requerido'),

    check('total_tratamiento')
        .isDecimal()
        .withMessage('El total del tratamiento debe ser un número decimal')
        .not()
        .isEmpty()
        .withMessage('El total del tratamiento es requerido'),

    (req, res, next) => {
        // Esta es una función de manejo de errores que deberías tener para manejar los errores de validación.
        return validateResults(req, res, next);
    }
];

module.exports = validateTratamientoFacturaCreation;
