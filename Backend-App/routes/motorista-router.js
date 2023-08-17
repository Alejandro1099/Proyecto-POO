var express = require('express');
var router = express.Router();


/*Este es un objeto de prueba*/
var motoristas = [{
    nombre: 'Juan',
    correo: 'Juan123@yahoo.es',
    foto: 'https://e0.pxfuel.com/wallpapers/558/38/desktop-wallpaper-vai-pro-perfil-essa-personagens-de-anime-tudo-anime-anime-kakashi-1080x1080.jpg'
}];

//crear un nuevo motorista
router.post('/', function(req, res){
    let motorista = {
    nombre: req.body.nombre,
    correo: req.body.correo,
    foto: req.body.foto
    }
    motoristas.push(motorista);
    res.send({CodigoResultado:1, mensaje:'Registro guardado', motoristaGuardado: motorista});
})

//obtener un solo motorista
router.get('/:id', function(req, res){
    if(req.params.id > (motoristas.length-1)){
        res.send({CodigoResultado:0, mensaje:"Motorista no existe en los registros"});
    }else{
        res.send(motoristas[req.params.id]);
    }
})

//obtener todos los motoristas
router.get('/', function(req, res){
    res.send(motoristas);
})

//actualizar un motorista
router.put('/:id', function(req, res){
    let motorista = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        foto: req.body.foto
        }

    motoristas[req.params.id] = motorista;
    res.send({CodigoResultado:1, mensaje:"Motorista actualizado"})
})

router.delete('/:id', function(req, res){
    motoristas.splice(req.params.id, 1); //splice recibe el indeice y el elemento a borrar
    res.send({CodigoResultado:1, mensaje:"Motorista eliminado"})
})

module.exports = router; //exportando el objeto completo