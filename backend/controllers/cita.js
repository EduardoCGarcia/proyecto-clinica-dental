const { matchedData } = require("express-validator");
const models = require("../models");
const citasModel = models.citasModel;
const Usuario = models.usersModel;


const createAppointment = async (req, res) => {
    try {
        req = matchedData(req);
        const cita = req;
        const data = await citasModel.create(cita);

        return res.status(201).send(data); // 201 Created. Indica que la cita se creó con éxito.

    } catch (error) {
        return res.status(500).send("Error creando la cita: " + error); // 500 Internal Server Error. Indica que hubo un error en el servidor.
    }
}


const getAppointments = async (req, res) => {
    try {
        const dataAppointments = await citasModel.findAll({
            attributes:['id','rol_consulta','fecha','hora'],
            include: [
                {
                    model: Usuario,
                    as: 'Paciente', // Alias para el usuario asociado como paciente
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                },
                {
                    model: Usuario,
                    as: 'Dentista', // Alias para el usuario asociado como dentista
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                },
            ],
        });
        return res.status(200).send(dataAppointments);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor: " + error);
    }
}

const getApoinmentsFecha = async (req, res) =>{
    
    try {
        const { Op } = require('sequelize');
        const { fecha, id_dentista } = matchedData(req);
        const fechaObj = new Date(fecha);
        const whereClause = fechaObj.getHours() === 0 && fechaObj.getMinutes() === 0
            ? { fecha: fechaObj }
            : { fecha: { [Op.gte]: fechaObj, [Op.lt]: new Date(fechaObj.getTime() + 24 * 60 * 60 * 1000) } };

        const data = await citasModel.findAll({ where: whereClause, id_dentista: id_dentista });
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

const getAppointmentsByDentista = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataAppointments = await citasModel.findAll({
            attributes:['id','rol_consulta','fecha','hora'],
            include: [
                {
                    model: Usuario,
                    as: 'Paciente', // Alias para el usuario asociado como paciente
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                },
                {
                    model: Usuario,
                    as: 'Dentista', // Alias para el usuario asociado como dentista
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                    where: {
                        id:id
                    }
                },
            ],
        });
        return res.status(200).send(dataAppointments);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor: " + error);
    }
}

const getAppointmentsByPaciente = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataAppointments = await citasModel.findAll({
            attributes:['id','rol_consulta','fecha','hora'],
            include: [
                {
                    model: Usuario,
                    as: 'Paciente', // Alias para el usuario asociado como paciente
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                    where: {
                        id:id
                    }
                },
                {
                    model: Usuario,
                    as: 'Dentista', // Alias para el usuario asociado como dentista
                    attributes: ['id','nombre', 'primerApellido', 'segundoApellido', 'telefono', 'email', 'notas'],
                },
            ],
        });
        return res.status(200).send(dataAppointments);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor: " + error);
    }
}

const getAppointment = async (req, res) => {
    try {

        const { id } = matchedData(req);

        const dataAppointment =  await citasModel.findByPk(id)

        if (!dataAppointment) {
            return res.status(404).send({message: 'Cita no encontrada'});
        }

        return res.status(200).send(dataAppointment);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}
const putAppointment = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataAppointment =  await citasModel.findByPk(id)

        if (!dataAppointment) {
            return res.status(404).send({message: 'Cita no encontrada'});
        }

        const updateAppointment = await dataAppointment.update(req.body); // This will update the appointment using the dataAppointment.update() method and passing in the request body as the parameter. The await keyword will wait for the update to be completed before moving on to the next line of code.
        
        return res.status(200).send(updateAppointment);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}
const deleteAppointment = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataAppointment =  await citasModel.findByPk(id)

        if (!dataAppointment) {
            return res.status(404).send({message: 'Cita no encontrada'});
        }

        await dataAppointment.destroy(); // This will update the appointment using the dataAppointment.update() method and passing in the request body as the parameter. The await keyword will wait for the update to be completed before moving on to the next line of code.
        
        return res.status(200).send({message: "Cita eliminada con exito"});
 
    } catch (error) {
        return res.status(500).send("Error obteniendo las citas: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}


module.exports = { 
    createAppointment, 
    getAppointment, 
    getAppointments,
    getAppointmentsByDentista,
    getAppointmentsByPaciente,
    putAppointment,
    deleteAppointment,
    getApoinmentsFecha
}
