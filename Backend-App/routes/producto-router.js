var express = require('express');
var router = express.Router();
var producto = require('../models/producto');

//registrar nuevo producto
router.post('/', function(req, res){
    let item = new producto(
        {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        foto: req.body.foto,
        id_producto: req.body.id_producto
        }
    );
    
    item.save().then(result =>{
        res.send("Producto registrado con exito", result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

//obtener un producto
router.get('/:id', function(req, res){
    producto.find({_id:req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//obtener todos los productos
router.get('/', function(req, res){
    producto.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Actualizar un producto
router.put('/:id', function(req, res){
    producto.findByIdAndUpdate(
        {
            _id:req.params.id
        },
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            foto: req.body.foto,
            id_producto: req.body.id_producto
        }
    ).then(result=>{
        res.send("Producto actualizado", result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//borrar un producto
router.delete('/:id', function(req, res){
    producto.findByIdAndRemove(
        {
            _id:req.params.id
        }
    ).then(result =>{
        res.send("Borrado con exito");
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;