const express = require('express'); 
const bodyParser = require ('body-parser');
const apiRouter = require('./routes/api');
const app = express(); 
require('./db');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Sigp - Mis Hermosos Joseph Marc y Ariana Michelle [Hora: 19:10]'); 
});

app.use('/api', apiRouter);

app.listen(3000, () => { 
    console.log('Server On Line xxx'); 
});