var mongoose = require('mongoose');//siempre importar mongoose par crear los modelos de la DB

var esquema_empresa = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    foto: String
});

module.exports = mongoose.model('empresas', esquema_empresa);

/*
nombre: nombre de la empresa
foto: foto o logo de la emprea
descripcion: descripcion de la empresa y su rubro
*/