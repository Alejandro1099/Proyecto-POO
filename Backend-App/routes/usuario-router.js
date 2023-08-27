var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

//registrar un nuevo usuario
router.post('/', function (req, res) {
    let cliente = new usuario(
        {
            nombre: req.body.nombre,
            pass: req.body.pass
        }
    );
    cliente.save().then(result => {
        res.send('Usuario registrado con exito');
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
});

// Ruta para validar un usuario
router.post('/validate-user', async (req, res) => {
    const { username, password } = req.body;

    // Buscar al usuario en la base de datos
    const user = await usuarios.findOne({ nombre, pass });

    if (user) {
        res.json({ message: 'Usuario válido' });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

module.exports = router;