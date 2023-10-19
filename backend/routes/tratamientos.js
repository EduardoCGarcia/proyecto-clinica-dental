const express = require('express');
const { getTratamiento } = require('../controllers/tratamientos');
const router = express.Router();

router.get('/:id', getTratamiento);



module.exports = router;