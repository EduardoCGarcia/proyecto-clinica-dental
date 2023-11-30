const router = require('express').Router();

const {
    createFactura,
    getFactura,
    getFacturas,
    getFilterFacturas,
    putFactura,
    deleteFactura
} = require('../controllers/facturas');

const { 
    validatorCreateFactura, 
    validatorUpdateFactura 
} = require('../validators/facturas');

const {validatorIdParam, validatorRolParam} = require('../validators/idParam');

router.post(
    "/", 
    validatorCreateFactura, 
    createFactura);

router.get(
    "/filter", 
    validatorIdParam,
    validatorRolParam,
    getFilterFacturas);

router.get(
    "/:id", 
    validatorIdParam, 
    getFactura);

router.get(
    "", 
    getFacturas);

router.put(
    "/:id", 
    validatorIdParam, 
    validatorUpdateFactura, 
    putFactura);

router.delete(
    "/:id", 
    validatorIdParam, 
    deleteFactura);

module.exports = router;