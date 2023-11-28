const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorAddPago = [
    check('id_factura')
        .isInt()
        .withMessage('El ID de la factura debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID de la factura es requerido'),
    check('fecha')
        .custom(value => {
            if (isNaN(new Date(value).getTime())) {
                throw new Error();
            }
            return true;
        })
        .withMessage('La fecha debe ser válida')
        .not()
        .isEmpty()
        .withMessage('La fecha es requerida'),

    check('monto')
        .isDecimal()
        .withMessage('El monto debe ser un número decimal')
        .not()
        .isEmpty()
        .withMessage('El monto es requerido'),

    check('forma_de_pago')
        .isIn(['contado', 'credito'])
        .withMessage('La forma de pago debe ser "contado" o "credito"')
        .not()
        .isEmpty()
        .withMessage('La forma de pago es requerida'),

    check('observaciones')
        .optional()
        .isLength({ max: 255 })
        .withMessage('Las observaciones no pueden exceder los 255 caracteres'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorUpdatePago = [
    check('fecha')
        .optional()
        .custom(value => {
            if (isNaN(new Date(value).getTime())) {
                throw new Error();
            }
            return true;
        })
        .withMessage('La fecha debe ser válida'),

    check('monto')
        .optional()
        .isDecimal()
        .withMessage('El monto debe ser un número decimal'),

    check('forma_de_pago')
        .optional()
        .isIn(['contado', 'credito'])
        .withMessage('La forma de pago debe ser "contado" o "credito"'),

    check('observaciones')
        .optional()
        .isLength({ max: 255 })
        .withMessage('Las observaciones no pueden exceder los 255 caracteres'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {validatorAddPago, validatorUpdatePago}


