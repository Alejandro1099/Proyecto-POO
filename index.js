var express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

/*Este es un objeto de prueba*/
var motoristas = [{
    nombre: 'Juan',
    correo: 'Juan123@yahoo.es',
    foto: 'https://e0.pxfuel.com/wallpapers/558/38/desktop-wallpaper-vai-pro-perfil-essa-personagens-de-anime-tudo-anime-anime-kakashi-1080x1080.jpg'
}];


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//crear un nuevo motorista
app.post('/motoristas', function(req, res){
    let motorista = {
    nombre: req.body.nombre,
    correo: req.body.correo,
    foto: req.body.foto
    }
    motoristas.push(motorista);
    res.send({CodigoResultado:1, mensaje:'Registro guardado', motoristaGuardado: motorista});
})

//obtener un solo motorista
app.get('/motoristas/:id', function(req, res){
    if(req.params.id > (motoristas.length-1)){
        res.send({CodigoResultado:0, mensaje:"Motorista no existe en los registros"});
    }else{
        res.send(motoristas[req.params.id]);
    }
})

//obtener todos los motoristas
app.get('/motoristas', function(req, res){
    res.send(motoristas);
})

//actualizar un motorista
app.put('/motoristas/:id', function(req, res){
    let motorista = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        foto: req.body.foto
        }

    motoristas[req.params.id] = motorista;
    res.send({CodigoResultado:1, mensaje:"Motorista actualizado"})
})

app.delete('/motoristas/:id', function(req, res){
    motoristas.splice(req.params.id, 1); //splice recibe el indeice y el elemento a borrar
    res.send({CodigoResultado:1, mensaje:"Motorista eliminado"})
})