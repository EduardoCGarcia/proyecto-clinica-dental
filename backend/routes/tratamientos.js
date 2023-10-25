const express = require('express');
const router = express.Router();

const { 
    getTratamiento, 
    getTratamientos 
} = require('../controllers/tratamientos');
const validatorIdParam = require('../validators/idParam');

router.get(
    '/:id', 
    validatorIdParam, 
    getTratamiento
    );

router.get(
    '/', 
    getTratamientos
    );

module.exports = router;