const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorAddToHistorialClinico = [
    check('id_paciente')
        .isInt()
        .withMessage('El ID del paciente debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID del paciente es requerido'),

    check('id_tratamiento')
        .isInt()
        .withMessage('El ID del tratamiento debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID del tratamiento es requerido'),

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

    check('nota')
        .exists()
        .notEmpty()
        .isLength({ max: 255 })
        .withMessage('La nota no puede exceder los 255 caracteres'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];


module.exports = { validatorAddToHistorialClinico };