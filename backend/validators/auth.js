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
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:4,max:15}),
    check("telefono")
    .isLength({min:10,max:99}),
    
    (req, res, next) => {
        return validateResults(req, res, next); 
    }
];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:8,max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next); 
    }
];



module.exports = {validatorSignUp, validatorLogin};