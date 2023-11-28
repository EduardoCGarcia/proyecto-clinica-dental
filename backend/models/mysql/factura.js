const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Usuario = require("./users");

const Factura = sequelize.define(
    "facturas",
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
            allowNull: true,
            defaultValue: 0
        },
        saldo_deudor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        }
    },
    {
        timestamps: false, // Esto agrega campos createdAt y updatedAt a la tabla.
    }
);

Factura.belongsTo(Usuario, { foreignKey: "id_paciente", as: "Paciente" });


module.exports = Factura;