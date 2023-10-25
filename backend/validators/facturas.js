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
        .custom(value => {
            if (isNaN(new Date(value).getTime())) {
                throw new Error();
            }
            return true;
        })
        .withMessage('La fecha de emisión debe ser válida')
        .not()
        .isEmpty()
        .withMessage('La fecha de emisión es requerida'),

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
