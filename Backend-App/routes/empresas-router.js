var express = require('express');
var router = express.Router();
var empresa = require('../models/empresa');

//Registrar una nueva empresa
router.post('/', function(req, res){
    let restaurante = new empresa(
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            foto: req.body.foto,
            id_empresa: req.body.id_empresa
        }
    );
    restaurante.save().then(result=>{
        res.send('Empresa agregada a la BD');
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});


//Obtener todas las empresas
router.get('/', function(req, res){
    empresa.find().then(result =>{ 
        res.send(result);
        res.end();
    }).catch(error =>{
        res.send(error);
        res.send();
    });
});

//obtener una sola empresa
router.get('/:id', function(req, res){
    empresa.find({_id:req.params.id}).then(result =>{ 
        res.send(result[0]);
        res.end();
    }).catch(error =>{
        res.send(error);
        res.end();
    });
})

//Actualizar una empresa
router.put('/:id', function(req, res){
    empresa.findByIdAndUpdate(
        {
            _id:req.params.id
        },
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            foto: req.body.foto,
            id_empresa: req.body.id_empresa
        }
    ).then(result =>{
        res.send("Se actualizo correctamente");
        res.end();
    }).catch(error =>{
        res.send(error);
        res.end();
    });
});

//Eliminar una empresa
router.delete('/:id', function(req, res){
    empresa.findByIdAndRemove(
        {
            _id:req.params.id
        },
    ).then(result =>{
        res.send("Empresa eliminada de la BD");
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;