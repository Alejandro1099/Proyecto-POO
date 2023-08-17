var express = require('express');
var router = express.Router();
var motorista = require('../models/motorista');

//crear un nuevo motorista
router.post('/', function(req, res){
    let nuevoMotorista = new motorista({
        nombre: req.body.nombre,
        correo: req.body.correo,
        foto: req.body.foto
    });
    nuevoMotorista.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

//obtener un solo motorista
router.get('/:id', function(req, res){
    motorista.find({_id:req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//obtener todos los motoristas
router.get('/', function(req, res){
    motorista.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//actualizar un motorista
router.put('/:id', function(req, res){
    motorista.findByIdAndUpdate(
        {
            _id : req.params.id 
        },
        {
            nombre: req.body.nombre,
            correo: req.body.correo,
            foto: req.body.foto
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

router.delete('/:id', function(req, res){
    motorista.findByIdAndRemove(
        {
            _id: req.params.id
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

module.exports = router; //exportando el objeto completo