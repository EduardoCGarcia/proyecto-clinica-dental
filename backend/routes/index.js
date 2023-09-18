// Importamos las bibliotecas necesarias
const express = require("express");
const fs = require("fs");

// Inicializamos el router de Express
const router = express.Router();

// __dirname es una variable global en Node.js que obtiene la dirección del directorio del módulo actual.
const PATH_ROUTES = __dirname;

/**
 * Función que quita la extensión de un nombre de archivo.
 * @param {string} fileName - El nombre del archivo al que se le quitará la extensión.
 * @return {string} - Nombre del archivo sin su extensión.
 */
const removeExtension = (fileName) => {
    // Split the file name when a dot is found and take the first part
    return fileName.split('.').shift();
}

// Leer todos los archivos en el directorio actual de manera sincrónica
fs.readdirSync(PATH_ROUTES).filter((file) => {
    // Obtener el nombre del archivo sin su extensión
    const name = removeExtension(file);
    
    // Si el nombre del archivo no es 'index', lo utilizamos para configurar una ruta
    if (name !== 'index') {
        // Configurar la ruta basada en el nombre del archivo y requerir su contenido como middleware
        // Por ejemplo, si el archivo se llama 'users.js', se configurará la ruta '/users'
        router.use(`/${name}`, require(`./${file}`));
    }
});

// Exportamos el router para usarlo en otras partes de la aplicación
module.exports = router;
