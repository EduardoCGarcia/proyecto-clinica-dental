const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateAppoinment = [
    check('id_dentista')
        .isInt()
        .withMessage('El ID del dentista debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID del dentista es requerido'),

    check('id_paciente')
        .isInt()
        .withMessage('El ID del paciente debe ser un número entero')
        .not()
        .isEmpty()
        .withMessage('El ID del paciente es requerido'),

    check('fecha')
        .isDate()
        .withMessage('La fecha debe ser válida')
        .not()
        .isEmpty()
        .withMessage('La fecha es requerida'),

    check('hora')
        .not()
        .isEmpty()
        .withMessage('La hora es requerida'),

    check('motivo')
        .optional()
        .isLength({ max: 255 })
        .withMessage('El motivo no puede exceder los 255 caracteres'),

    check('nota')
        .optional()
        .isLength({ max: 255 })
        .withMessage('La nota no puede exceder los 255 caracteres'),

    check('rol_consulta')
        .optional()
        .isIn(['cita', 'urgencia'])
        .withMessage('El rol de la consulta debe ser "cita" o "urgencia"'),

    (req,res,next) => {
        return validateResults(req,res,next);
    }
]

module.exports = {validatorCreateAppoinment}