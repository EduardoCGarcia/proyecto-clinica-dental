const {sequelize} = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define(
    "usuarios",
    {
        nombre:{
            type:DataTypes.STRING,
            allowNull: false
        },
        primerApellido:{
            type:DataTypes.STRING,
            allowNull: false
        },
        segundoApellido:{
            type:DataTypes.STRING,
            allowNull: false
        },
        /*Modificaciones adaptadas a campos de BD */
        fechaNacimiento:{
            type:DataTypes.DATE,
            allowNull: false
        },
        direccion:{
            type:DataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // Para asegurarte de que no haya correos electrónicos duplicados
        
        },
        notas:{
            type:DataTypes.STRING,
            allowNull: true
        },
        rol:{
            type:DataTypes.ENUM('admin', 'dentista', 'paciente'),
            allowNull: false
        },
        pass:{
            type:DataTypes.STRING(20), // Puedes usar STRING.BINARY o STRING(64) para almacenar el hash de la contraseña
            allowNull: false
        },
        cedula:{
            type:DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps:false,
    }
);

module.exports = Usuario