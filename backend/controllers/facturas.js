const { matchedData } = require("express-validator");
const facturasModel = require("../models").facturasModel;
const TratamientoFactura = require('../models').tratamientoFacturasModel;
const Pago = require('../models').pagosModel;

const createFactura = async (req, res) => {
    //TODO Validar que los id existan
    try {
        req = matchedData(req);
        const { id_tratamiento, total_tratamiento, monto, observaciones, ...fac } = req;
        factura = { ...fac, monto_total: total_tratamiento, saldo_deudor: total_tratamiento };
        
        const facturaData = await facturasModel.create(factura);
        if (!facturaData) {
            return res.status(500).send("Error en la inserción en la base de datos");
        }
        const { id, id_paciente } = facturaData;
        const tratamientoFactura = {
            id_factura: id,
            id_tratamiento,
            total_tratamiento
        }

        const tratamientoFacturaData = await TratamientoFactura.create(tratamientoFactura);

        if (!tratamientoFacturaData) {
            return res.status(500).send("Error en la inserción en la base de datos");
        }

        if (monto == 0) {
            return res.status(201).send(data);
        }

        const pago = {
            id_factura: id,
            fecha: facturaData.fecha_emision,
            monto,
            forma_de_pago: "contado",
            observaciones
        }

        const pagoData = await Pago.create(pago);

        //TODO validar que el pagoDATA no sea nulo  como se hace en la linea  26





        //TODO construir el objeto historialclinico y realizar el query

        const data = {
            facturaData,
            tratamientoFacturaData,
            pagoData
        }



        return res.status(201).send(data);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}


const getFacturas = async (req, res) => {
    try {

        const dataFacturas = await facturasModel.findAll()

        return res.status(200).send(dataFacturas);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}

const getFactura = async (req, res) => {
    try {

        const { id } = matchedData(req);

        const dataFactura = await facturasModel.findByPk(id)

        if (!dataFactura) {
            return res.status(404).send({ message: 'Factura no encontrada' });
        }

        return res.status(200).send(dataFactura);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}
const putFactura = async (req, res) => {
    try {
        const { id } = matchedData(req);

        const dataFactura = await facturasModel.findByPk(id)

        if (!dataFactura) {
            return res.status(404).send({ message: 'Factura no encontrada' });
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

        const dataFactura = await facturasModel.findByPk(id)

        if (!dataFactura) {
            return res.status(404).send({ message: 'Factura no encontrada' });
        }

        await dataFactura.destroy();

        return res.status(200).send({ message: "Factura eliminada con exito" });

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
