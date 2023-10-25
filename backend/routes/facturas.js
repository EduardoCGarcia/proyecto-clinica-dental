const router = require('express').Router();

const {
    createFactura,
    getFactura,
    getFacturas,
    putFactura,
    deleteFactura
} = require('../controllers/facturas');

const { validatorCreateFactura, validatorUpdateFactura } = require('../validators/facturas');
const validatorIdParam = require('../validators/idParam');

router.post("/", validatorCreateFactura, createFactura);

router.get("/:id", validatorIdParam, getFactura);

router.get("", getFacturas);

router.put("/:id", validatorIdParam, validatorUpdateFactura, putFactura);

router.delete("/:id", validatorIdParam, deleteFactura);

module.exports = router;