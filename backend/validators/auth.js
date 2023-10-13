const { check } =  require("express-validator");
const validateResults =  require("../utils/handleValidator");

const validatorSignUp = [
    check("nombre")
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check("primerApellido")
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check("segundoApellido")
    .exists()
    .notEmpty()
    .isLength({min:0,max:99}),
    /*Modificaciones adaptadas a campos de BD */
    check("fechaNacimiento")
    .exists()
    .notEmpty(),

    check("direccion")
    .exists()
    .notEmpty()
    .isLength({min:0,max:99}),

    check("telefono")
    .isLength({min:10,max:99}),

    check("notas")
    .isLength({min:0,max:99}),

    check("rol")
    .exists()
    .notEmpty()
    .isLength({min:5,max:10}),

    check("email")
    .exists()
    .notEmpty()
    .isEmail(),

    check("pass")
    .exists()
    .notEmpty()
    .isLength({min:8,max:20}),

    check("cedula"),

    (req, res, next) => {
        return validateResults(req, res, next); 
    }
];

const validatorLogin = [
    check("pass")
    .exists()
    .notEmpty()
    .isLength({min:4,max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next); 
    }
];



module.exports = {validatorSignUp, validatorLogin};