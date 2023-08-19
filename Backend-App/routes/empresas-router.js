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

module.exports = router;