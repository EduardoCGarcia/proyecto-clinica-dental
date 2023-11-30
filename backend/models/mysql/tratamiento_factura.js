const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Factura = require('../mysql/factura')
const Tratamiento = require('../mysql/tratamiento')

const TratamientoFactura = sequelize.define(
    "tratamiento_facturas",
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
        timestamps: false,
    }
);

// Añadir asociaciones
TratamientoFactura.belongsTo(Factura, { foreignKey: "id_factura", as: 'factura' });
TratamientoFactura.belongsTo(Tratamiento, { foreignKey: "id_tratamiento", as: 'tratamiento' });


module.exports = TratamientoFactura;