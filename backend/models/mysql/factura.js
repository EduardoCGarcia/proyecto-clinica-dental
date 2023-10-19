const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Factura = sequelize.define(
    "factura",
    {
        id_paciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_emision: {
            type: DataTypes.DATE,
            allowNull: false
        },
        monto_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        saldo_deudor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: false, // Esto agrega campos createdAt y updatedAt a la tabla.
    }
);

module.exports = Factura;