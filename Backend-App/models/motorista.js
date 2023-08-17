var mongoose = require('mongoose');//siempre importar mongoose par crear los modelos de la DB

var esquema = new mongoose.Schema({
    nombre: String,
    correo: String,
    foto: String
});

module.exports = mongoose.model('motoristas', esquema);