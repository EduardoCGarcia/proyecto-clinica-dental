/* Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});
/

Ruta para obtener un usuario por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});
*/

const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const models = require("../models");
const Usuario = models.usersModel;


const createUsuario = async (req, res) => {
  try {
    req = matchedData(req);

    const password = await encrypt(req.pass);
    /**
 * Body object.
 */
    const body = { ...req, pass: password };

    const dataUser = await Usuario.create(body);

    dataUser.set('pass', undefined, { strict: false })

    /**
* Data object.
*/
    const user = dataUser;

    const mensajesRoles = {
      'paciente': 'Paciente creado correctamente!',
      'dentista': 'Dentista creado correctamente!',
      'admin': 'Admin creado correctamente!'
    };

    const mensaje = mensajesRoles[user.rol] || 'Rol no reconocido';

    res.status(201).send({ message: mensaje });


  } catch (error) {
    console.error('Error during signUp: ', error); // Cambia a console.error para diferenciar errores en tus logs
    res.status(500).send({ message: "Ha ocurrido un error interno. Por favor, intenta nuevamente más tarde." });
  }
}


const getUsuario = async (req, res) => {
  try {
    
    const dataUser = await Usuario.findAll({
      attributes: [
        'id',
        'nombre',
        'primerApellido',
        'segundoApellido',
        'fechaNacimiento',
        'direccion',
        'telefono',
        'email',
        'notas',
        'rol',
        'cedula', // Excluir 'cedula' si el rol es 'paciente'
        'imagen',
      ],
    });
    return res.status(200).send(dataUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error interno del servidor: " + error);
  }
}

const getFilterUser = async (req, res) => {
  try {
    const { rol} = matchedData(req)

    const dataUsers = await Usuario.findAll({
      attributes: ['id',
        'nombre',
        'primerApellido',
        'segundoApellido',
        'fechaNacimiento',
        'direccion',
        'telefono',
        'email',
        'notas',
        'rol',
        'cedula', // Excluir 'cedula' si el rol es 'paciente'
        'imagen',],
      where: { rol: rol }
    });

    return res.status(200).json(dataUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error interno del servidor: " + error);
  }
}

const getIdUser = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const dataUsuario = await Usuario.findByPk(id, {
      attributes: {
        exclude: ['pass'],
      },
    });

    if (!dataUsuario) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }

    return res.status(200).send(dataUsuario);

  } catch (error) {
    return res.status(500).send("Error interno del servidor: " + error);
  }
}

const putUser = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const dataUser = await Usuario.findByPk(id)

    if (!dataUser) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }

    const updateUser = await dataUser.update(req.body); // This will update the appointment using the dataAppointment.update() method and passing in the request body as the parameter. The await keyword will wait for the update to be completed before moving on to the next line of code.

    return res.status(200).send(updateUser);

  } catch (error) {
    return res.status(500).send("Error interno del servidor: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const dataUsuario = await Usuario.findByPk(id);

    if (!dataUsuario) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }

    await dataUsuario.destroy();

    return res.status(200).send({ message: "Usuario eliminado con éxito" });

  } catch (error) {
    return res.status(500).send("Error interno del servidor: " + error);
  }
}


module.exports = {
  createUsuario,
  getUsuario,
  getIdUser,
  getFilterUser,
  putUser,
  deleteUser,
}