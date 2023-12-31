const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Usuario = require('../mysql/users')

const Cita = sequelize.define(
    "cita",
    {
        id_dentista: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_paciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hora: {
            type: DataTypes.TIME,
            allowNull: false
        },
        motivo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nota: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rol_consulta: {
            type: DataTypes.ENUM('cita', 'urgencia'),
            allowNull: true
        }
    },
    {
        timestamps: false, // Esto agrega campos createdAt y updatedAt a la tabla.
    }
);

Cita.belongsTo(Usuario, { foreignKey: "id_dentista", as: "Dentista" });
Cita.belongsTo(Usuario, { foreignKey: "id_paciente", as: "Paciente" });

module.exports = Cita;