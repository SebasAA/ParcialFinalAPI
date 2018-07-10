'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesProduct = require("./routes/productRoutes")
const routesAuth = require("./routes/authRoutes")
const routesUser = require("./routes/userRoutes")
const routesTicket = require("./routes/ticketRoutes")
const routesMaterial = require("./routes/materialRoutes")

app.use('/uploads', express.static('uploads'));//primer parametro permite que se incluya el nombre del folder para que se busque en un browser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api", routesProduct)
app.use("/auth", routesAuth)
app.use("/api", routesUser)
app.use("/api", routesTicket)
app.use("/api", routesMaterial)

module.exports=app;
