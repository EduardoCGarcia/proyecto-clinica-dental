const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');
const { validatorCreateUser, validatorGetRolUser, validatorUpdateUser } = require('../validators/usuarios');
const { createUsuario, getUsuario, getFilterUser, putUser, getIdUser, deleteUser } = require('../controllers/usuarios');
const { validatorIdParam } = require('../validators/idParam');

// Ruta para crear un nuevo usuario
router.post('/', validatorCreateUser, createUsuario);

// Ruta para obtener todos los usuarios
router.get('/', getUsuario);

// Ruta para obtener usuarios por rol y/o por numero de registros
router.get('/filter',validatorGetRolUser ,getFilterUser);

// Ruta para obtener usuario por id
router.get('/:id',validatorIdParam, getIdUser);

// Ruta para actualizar un usuario por ID
router.put('/:id',validatorIdParam,validatorUpdateUser, putUser);

 // Ruta para eliminar un usuario por ID
router.delete('/:id',validatorIdParam, deleteUser);

module.exports = router;