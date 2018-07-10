'use strict'

const Product = require('../models/productModel');

function getAllProducts(req, res){

}

function insertNewProduct(req, res){
    let newProduct = new Product();
    let bd = req.body;

    newProduct.name =  bd.name;
    newProduct.cost =  bd.cost;
    newProduct.price =  bd.price;
    newProduct.stock =  bd.stock;
    newProduct.sold =  bd.sold;
    newProduct.category =  bd.category;

    newProduct.save((err, productSvd)=>{
        if(err) return res.status(500).send({message:"Internal Error"});

        res.status(200).send(productSvd);
    });

}

module.exports={
    insertNewProduct,
    getAllProducts
}