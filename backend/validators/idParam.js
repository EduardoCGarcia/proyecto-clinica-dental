const { check } = require('express-validator');
const validateResults = require("../utils/handleValidator");

const validatorIdParam = [
    check("id")
        .exists()
        .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

const validatorIdFacturaParam = [
    check("id_factura")
        .exists()
        .notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = { validatorIdParam, validatorIdFacturaParam };