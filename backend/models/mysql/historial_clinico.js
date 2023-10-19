const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const HistorialClinico = sequelize.define(
    "historial_clinico",
    {
        id_paciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_tratamiento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nota: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false, // Esto agrega campos createdAt y updatedAt a la tabla.
    }
);

module.exports = HistorialClinico;