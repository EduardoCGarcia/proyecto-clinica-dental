const { matchedData } = require("express-validator");
const models = require("../models");
const pagosModel = models.pagosModel;
const facturasModel = require("../models").facturasModel;


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
        const { Op } = require('sequelize'); //Necesaria para instrucciones sql más sencillas
        
        const { id } = matchedData(req);
        console.log('id: '+id);
        const factura = await facturasModel.findAll({
            attributes:['id_paciente','id_dentista', 'id'],
            where: {
                //id_dentista: id
                [Op.or]: [
                    { id_dentista: id },
                    { id_paciente: id }
                ]
            }
        });
        
        const idsFacturas = factura.map(factura => factura.id);

        console.log('Ids de las facturas:', idsFacturas);
        // Realizar una búsqueda de pagos con join en la tabla facturas
        const pagosList = await pagosModel.findAll({
            attributes: ['id', 'id_factura', 'fecha', 'monto', 'forma_de_pago', 'observaciones'],
            where: {
                id_factura: factura.map(factura => factura.id)
            }
        });

        const idPagos = pagosList.map(pagos => pagos.id)
        console.log('Ids de los pagos:', idPagos);
        
        // Si no hay pagos para ese dentista, envía un mensaje adecuado
        if (pagosList === 0) {
            return res.status(404).send({ message: 'No se encontraron pagos para el dentista especificado.' });
        }
    
        // Envía la lista de pagos como respuesta
        return res.status(200).send(pagosList);
    
    } catch (error) {
        console.error("Error interno del servidor:", error.message);
        return res.status(500).send("Error interno del servidor: " + error.message);
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
