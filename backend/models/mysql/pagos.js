const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Factura = require('../mysql/factura');
const Usuario = require("./users");

const Pagos = sequelize.define(
    "pagos",
    {
        id_factura: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        forma_de_pago: {
            type: DataTypes.ENUM('contado', 'credito'),
            allowNull: false
        },
        observaciones: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false, // Esto agrega campos createdAt y updatedAt a la tabla.
    }
);

Pagos.belongsTo(Factura, { foreignKey: "id_factura", as: "Factura" });


module.exports = Pagos;