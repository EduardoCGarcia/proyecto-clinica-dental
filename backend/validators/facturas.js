const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateFactura = [
    check('id_paciente')
        .isInt()
        .withMessage('El ID del paciente debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID del paciente es requerido'),

    check('fecha_emision')
    .exists()
    .notEmpty(),
    check('monto_total')
        .optional()
        .isDecimal()
        .withMessage('El monto total debe ser un número decimal'),

    check('saldo_deudor')
        .optional()
        .isDecimal()
        .withMessage('El saldo deudor debe ser un número decimal'),

    check('estado')
        .optional()
        .isBoolean()
        .withMessage('El estado debe ser un valor booleano'),

    check('id_dentista')
        .not()
        .isEmpty()
        .withMessage('El ID del dentista es requerido')
        .isInt()
        .withMessage('El ID del dentista debe ser un número entero'),

    //Aquí inicia la parte para el  tratamientoFactura

    check('total_tratamiento')
        .exists()
        .notEmpty()
        .isDecimal()
        .withMessage('El costo del tratamiento debe ser un número decimal'),

    check('id_tratamiento')
        .exists()
        .notEmpty()
        .isNumeric()
        .withMessage('El tratamiento debe es el numero que lo identifica'),

    //Aquí inicia la parte para el pago

    check('monto')
    .exists()
    .notEmpty()
    .isDecimal()
    .withMessage('El monto del pago debe ser un número decimal'),

    check('observaciones')
    .optional(),

    check('nota')
        .exists()
        .notEmpty()
        .isLength({ max: 255 })
        .withMessage('La nota no puede exceder los 255 caracteres'),



    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorUpdateFactura = [
    check('id_paciente')
        .optional()
        .isInt()
        .withMessage('El ID del paciente debe ser un número entero'),

    check('fecha_emision')
        .optional()
        .custom(value => {
            if (isNaN(new Date(value).getTime())) {
                throw new Error();
            }
            return true;
        })
        .withMessage('La fecha de emisión debe ser válida'),

    check('monto_total')
        .optional()
        .isDecimal()
        .withMessage('El monto total debe ser un número decimal'),

    check('saldo_deudor')
        .optional()
        .isDecimal()
        .withMessage('El saldo deudor debe ser un número decimal'),

    check('estado')
        .optional()
        .isBoolean()
        .withMessage('El estado debe ser un valor booleano'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { validatorCreateFactura, validatorUpdateFactura };
