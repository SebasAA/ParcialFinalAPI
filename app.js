'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesProduct = require("./routes/productRoutes")
const routesUser = require("./routes/userRoutes")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api", routesProduct)
app.use("/api", routesUser)

module.exports=app;