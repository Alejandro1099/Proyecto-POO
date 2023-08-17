var express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
    res.send({mensaje:'Registro guardado', motoristaGuardado: motorista});
})