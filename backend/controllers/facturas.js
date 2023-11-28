const { matchedData } = require("express-validator");
const facturasModel = require("../models").facturasModel;
const TratamientoFactura = require('../models').tratamientoFacturasModel;
const Pago = require('../models').pagosModel;
const Usuario = require('../models').usersModel;
const HistorialClinico = require('../models').historialClinicoModel;

const createFactura = async (req, res) => {
    //TODO Validar que los id existan
    try {
        req = matchedData(req);
        const { id_tratamiento, total_tratamiento, monto, observaciones, nota, ...fac } = req;
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

        const historialClinico = {
            id_paciente,
            id_tratamiento,
            fecha: facturaData.fecha_emision,
            nota
        }

        const historialClinicoData = await HistorialClinico.create(historialClinico);

        if (!historialClinicoData) {
            return res.status(500).send("Error en la inserción en la base de datos historial_clinico");
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

        if (!pagoData) {
            return res.status(500).send("Error en la inserción en la base de datos");
        }

       

        //TODO construir el objeto historialclinico y realizar el query

        const data = {
            facturaData,
            tratamientoFacturaData,
            pagoData,
            historialClinicoData
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

const getFilterFacturas = async (req, res) => {
    try {
        const {rol,id} = matchedData(req)
        console.log(rol);
        console.log(id);


        let dataFilFacturas
        if(rol == 'paciente'){
            dataFilFacturas = await facturasModel.findAll({
                attributes:['id','id_paciente','fecha_emision','monto_total', 'saldo_deudor', 'estado', 'id_dentista'],
                include: [
                    {
                        model: Usuario,
                        as: 'Paciente', // Alias para el usuario asociado como paciente
                        attributes: ['id','nombre', 'primerApellido', 'segundoApellido','email'],
                        where: {
                            id:id
                        }
                        
                    },
                    {
                        model: Usuario,
                        as: 'Dentista', // Alias para el usuario asociado como dentista
                        attributes: ['id','nombre', 'primerApellido', 'segundoApellido','email'],
                    },
                ],
            });
        }else if(rol == 'dentista'){

            dataFilFacturas = await facturasModel.findAll({
                attributes:['id','id_paciente','fecha_emision','monto_total', 'saldo_deudor', 'estado', 'id_dentista'],
                include: [
                    {
                        model: Usuario,
                        as: 'Dentista', // Alias para el usuario asociado como paciente
                        attributes: ['id','nombre', 'primerApellido', 'segundoApellido','email'],
                        where: {
                            id:id
                        }
                    },
                    {
                        model: Usuario,
                        as: 'Paciente', // Alias para el usuario asociado como dentista
                        attributes: ['id','nombre', 'primerApellido', 'segundoApellido','email'],
                    },
                ],
            });
        }
        console.log(dataFilFacturas);
    
        return res.status(200).json(dataFilFacturas);
      } catch (error) {
        console.error(error);
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
    getFilterFacturas,
    putFactura,
    deleteFactura,
}
