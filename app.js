'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesProduct = require("./routes/productRoutes")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api", routesProduct)

module.exports=app;