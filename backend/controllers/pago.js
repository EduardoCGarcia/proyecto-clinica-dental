const { matchedData } = require("express-validator");
const models = require("../models");
const pagosModel = models.pagosModel;
const facturasModel = models.facturasModel;


const addPago = async (req, res) => {
    try {
        const pago = matchedData(req);
        const data = await pagosModel.create(pago);

        return res.status(201).send(data); // 201 Created. Indica que la cita se creó con éxito.

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); // 500 Internal Server Error. Indica que hubo un error en el servidor.
    }
}


const getPago = async (req, res) => {
    try {

        const { id } = matchedData(req);

        const dataPago =  await pagosModel.findByPk(id)
        if (!dataPago) {
            return res.status(404).send({message: 'Pago no no encontrado'});
        }

        return res.status(200).send(dataPago);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}

const getPagosByFactura = async (req, res) => {
    try {
        // Obtener el ID del paciente desde los datos coincidentes (matched data)
        const { id } = matchedData(req);
        
        const pagosList = await pagosModel.findAll({
            where: {
                id_factura: id
            }
        });

        // Si no hay pagos para ese paciente, envía un mensaje adecuado
        if (pagosList.length === 0) {
            return res.status(404).send({message: 'No se encontraron pagos para el paciente especificado.'});
        }

        // Envía la lista de pagos como respuesta
        return res.status(200).send(pagosList);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
};



module.exports = { 
    addPago, 
    getPago,
    getPagosByFactura,
}
