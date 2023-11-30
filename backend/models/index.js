const ENGINE_DB = process.env.ENGINE_DB;

const path = require('path');
const pathModels = (ENGINE_DB === 'nosql') ? path.join(__dirname, 'nosql') : path.join(__dirname, 'mysql');

/**
 * Models object.
 */
const models = {
    usersModel: require(`${pathModels}/users`),
    storageModel: require(`${pathModels}/storage`),
    tratamientosModel: require(`${pathModels}/tratamiento`),
    citasModel: require(`${pathModels}/cita`),
    facturasModel: require(`${pathModels}/factura`),
    pagosModel : require(`${pathModels}/pagos`),
    historialClinicoModel : require(`${pathModels}/historial_clinico`),
    tratamientoFacturasModel : require(`${pathModels}/tratamiento_factura`),
}

module.exports = models;