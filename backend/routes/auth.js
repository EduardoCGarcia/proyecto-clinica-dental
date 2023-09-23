const express = require('express');
const { signUp, logIn } = require('../controllers/auth');
const { validatorLogin, validatorSignUp } = require('../validators/auth');
const router = express.Router();

router.post(
    '/login', 
    validatorLogin, 
    logIn);

router.post(
    '/signup', 
    validatorSignUp, 
    signUp);


    
module.exports = router;
