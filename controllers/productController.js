'use strict'

const Product = require('../models/productModel');

function getAllProducts(req, res){

}

function insertNewProduct(req, res){
    let newProduct = new Product(req.body);

    newProduct.save((err, productSvd)=>{
        if(err) return res.status(500).send({message:"Internal Error"});

        res.status(200).send(productSvd);
    });

}

module.exports={
    insertNewProduct,
    getAllProducts
}