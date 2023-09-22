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
            allowNull: null
        },
        email:{
            type:DataTypes.NUMBER,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps:true,
    }
);

module.exports = Usuario