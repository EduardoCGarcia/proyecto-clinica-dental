const { tratamientosModel } = require('../models');


const getTratamiento = async (req, res) => {
    const id = req.params.id
    res.send(id + "Se envio correctamente");
}


module.exports = { getTratamiento }