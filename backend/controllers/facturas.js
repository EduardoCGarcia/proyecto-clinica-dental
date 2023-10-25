const { matchedData } = require("express-validator");
const facturasModel = require("../models").facturasModel;

const createFactura = async (req, res) => {
    //TODO Validar que los id existan
    try {
        req = matchedData(req);
        const factura = req;
        const data = await facturasModel.create(factura);

        return res.status(201).send(data); 

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); 
    }
}


const getFacturas = async (req, res) => {
    try {
        
        const dataFacturas =  await facturasModel.findAll()

        return res.status(400).send(dataFacturas);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}

const getFactura = async (req, res) => {
    try {

        const { id } = matchedData(req);

        const dataFactura =  await facturasModel.findByPk(id)

        if (!dataFactura) {
            return res.status(404).send({message: 'Factura no encontrada'});
        }

        return res.status(200).send(dataFactura);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}
const putFactura = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataFactura =  await facturasModel.findByPk(id)

        if (!dataFactura) {
            return res.status(404).send({message: 'Factura no encontrada'});
        }

        const updateFactura = await dataFactura.update(req.body); 
        
        return res.status(200).send(updateFactura);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error); 
    }
}
const deleteFactura = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataFactura =  await facturasModel.findByPk(id)

        if (!dataFactura) {
            return res.status(404).send({message: 'Factura no encontrada'});
        }

        await dataFactura.destroy(); 
        
        return res.status(200).send({message: "Factura eliminada con exito"});
 
    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}


module.exports = { 
    createFactura, 
    getFactura, 
    getFacturas, 
    putFactura,
    deleteFactura,
}
