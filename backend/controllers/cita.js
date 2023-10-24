const { matchedData } = require("express-validator");
const models = require("../models");
const citasModel = models.citasModel;


const createAppointment = async (req, res) => {
    try {
        req = matchedData(req);
        const cita = req;
        const data = await citasModel.create(cita);

        res.send(data); // This will send a response to the client indicating that the appointment was created successfully.
        
 
    } catch (error) {
        res.send("Error creating appointment: " + error); // This will send a response to the client indicating that there was an error creating the appointment and will include the
    }
}


module.exports = { createAppointment }