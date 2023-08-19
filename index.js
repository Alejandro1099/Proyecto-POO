var express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
const cors = require('cors');
var database = require('./Backend-App/modules/database');

var motoristaRouter = require('./Backend-App/routes/motorista-router');
var empresaRouter = require('./Backend-App/routes/empresas-router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/motoristas', motoristaRouter);
app.use('/empresas', empresaRouter);

app.get('/', (req, res) => res.send('Hello World! Alejandro conectandose'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))