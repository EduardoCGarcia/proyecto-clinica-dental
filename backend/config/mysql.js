const { Sequelize } = require('sequelize');
const config = require('./config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
});

// Prueba de conexión
const dbConection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida con éxito.');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}

module.exports = dbConection;