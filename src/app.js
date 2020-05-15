'user strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/config');
const app = express();

//Conexão com Banco de Dados MongoDb
mongoose.connect(config.connectionString)
    .then((sucess) => { })
    .catch((erro) => {
        console.log(erro)
    });

const userModel = require('../models/user-model');
const materialModel = require('../models/material-model');
const workModel = require('../models/work-model');
const classModel = require('../models/class-model');
const studentModel = require('../models/student-model');
const deliverWorkModel = require('../models/deliverWork-model');
const teacherModel = require('../models/teacher-model');

const autheticateRouter = require('../routes/authenticate-routes');
const adminRouter = require('../routes/admin-routes');
const studentRouter = require('../routes/student-routes');
const teacherRouter = require('../routes/teacher-routes');

app.use(bodyParser.json({
    limit: "5mb"
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization , x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/authenticate', autheticateRouter);
app.use('/user', adminRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);

module.exports = app;