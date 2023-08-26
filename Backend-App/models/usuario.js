var mongoose = require('mongoose');

var esquema_usuario = new mongoose.Schema({
    nombre: String,
    pass: String
});

module.exports = mongoose.model('usuarios', esquema_usuario);