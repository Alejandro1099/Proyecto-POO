var express = require('express');
var router = express.Router();
var empresa = require('../models/empresa');

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

module.exports = router;