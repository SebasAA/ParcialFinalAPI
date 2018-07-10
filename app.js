'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesProduct = require("./routes/productRoutes")
const routesAuth = require("./routes/authRoutes")
const routesUser = require("./routes/userRoutes")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api", routesProduct)
app.use("/auth", routesAuth)
app.use("/api", routesUser)

module.exports=app;