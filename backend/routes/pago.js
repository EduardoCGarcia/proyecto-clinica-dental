const router = require('express').Router();


const { addPago, getPago, getPagosByFactura, getPagosByPaciente } = require('../controllers/pago');
const { validatorIdParam, validatorIdFacturaParam } = require('../validators/idParam');
const { validatorAddPago } = require('../validators/pago');


router.post('/',validatorAddPago, addPago);

router.get("/byUser/:id", validatorIdParam,getPago);

router.get("/byFactura/:id", validatorIdParam,getPagosByFactura);

router.get("/byPaciente/:id", validatorIdParam,getPagosByPaciente);

module.exports = router