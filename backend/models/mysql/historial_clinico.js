const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Usuario = require('../mysql/users')
const Tratamiento = require("../mysql/tratamiento")


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

// Define las asociaciones con los modelos de Paciente y Tratamiento
HistorialClinico.belongsTo(Usuario, { foreignKey: "id_paciente", as: "Paciente" });
HistorialClinico.belongsTo(Tratamiento, { foreignKey: "id_tratamiento", as: "tratamiento" });


module.exports = HistorialClinico;