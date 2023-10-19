const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const TratamientoFactura = sequelize.define(
    "tratamiento_factura",
    {
        id_factura: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_tratamiento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_tratamiento: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
    {
        timestamps: false, // Esto agrega campos createdAt y updatedAt a la tabla.
    }
);

module.exports = TratamientoFactura;