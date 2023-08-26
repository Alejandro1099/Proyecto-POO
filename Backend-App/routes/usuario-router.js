var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

//registrar un nuevo usuario
router.post('/', function(req, res){
    let cliente = new usuario(
        {
            nombre: req.body.nombre,
            pass: req.body.pass
        }
    );
    cliente.save().then(result=>{
        res.send('Usuario registrado con exito');
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

module.exports = router;