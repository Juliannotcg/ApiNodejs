const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const swaggerDoc = require('./swaggerDoc')


const app = express();
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
requireDir('./src/models')

//Rotas
app.use('/api', require('./src/routes'));
swaggerDoc(app);

app.listen(3001);

