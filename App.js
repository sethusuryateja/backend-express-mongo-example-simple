const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/home');
const devicesRouter = require('./routes/devices');
var mongoDB = 'mongodb://127.0.0.1/test';
config = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }
 
mongoose.connect(mongoDB, config, (req, res) => {
    console.log('connected to db')
})

app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/devices', devicesRouter);

app.listen(3000, (req, res) => {
    console.log('server is running on 3000 port')
})