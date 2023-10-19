const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Tratamiento = sequelize.define(
    "tratamiento",
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false, // Si no deseas agregar campos createdAt y updatedAt.
    }
);

module.exports = Tratamiento;