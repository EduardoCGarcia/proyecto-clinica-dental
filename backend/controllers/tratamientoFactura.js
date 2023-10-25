const { matchedData } = require("express-validator");
const models = require("../models");

const tratamientoFacturasModel = models.tratamientoFacturasModel;

const createTratamientoFactura = async (req, res) => {
    try {
        
        const tratamientoFacturaData = matchedData(req);
        
        const nuevoTratamientoFactura = await tratamientoFacturasModel.create(tratamientoFacturaData);

        return res.status(201).send(nuevoTratamientoFactura);

    } catch (error) {
        return res.status(500).send("Error interno del servidor: " + error);
    }
}

module.exports = { createTratamientoFactura }