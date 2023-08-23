var mongoose = require('mongoose');//siempre importar mongoose par crear los modelos de la DB

var esquema_producto = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    foto: String,
    precio: Number,
    id_producto: Number

});

module.exports = mongoose.model('producto', esquema_producto);

/*
nombre: nombre del producto 
foto: foto del producto
descripcion: descripcion del producto
precio: cuanto vale
id_producto: sirve para el cruce con su empresa correspondiente
*/