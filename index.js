const express = require('express'); 
const bodyParser = require ('body-parser');
const apiRouter = require('./routes/api');
const app = express(); 
require('./db');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Sigp - Sistema de Gestión de Procesos My bebe Hermoso Joseph'); 
});

app.use('/api', apiRouter);

app.listen(3000, () => { 
    console.log('Server On Line'); 
});