'use strict'

const Product = require('../models/productModel');

function getProduct(req, res){
    let id_product = req.params.id_product;

    Product.findById(id_product)
    .populate("product_materials.id_material")
    .exec((err, productFnd)=>{
        if(err) return res.status(500).send({message:"Internal Error"});

        if(!productFnd) return res.status(404).send({message:"Not found"})

        res.status(200).send(productFnd)
    });
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

function getAllProducts(req,res){
    Product.find(({}))
        .populate('product_materials.id_material')
        .exec((err, resp)=>{
            if(err) return res.status(500).send({message:"Internal Error"})
            res.status(200).send(resp)
        })
}

function deleteProduct(req, res){
    let id_product = req.params.id_product;

    Product.findById(id_product, (err, prd)=>{
        if(err) return res.status(500).send({message:"Internal Error"});

        if(!productFnd) return res.status(404).send({message:"Not found"})

        prd.remove(err=>{
            if(err) return res.status(500).send({message:"Internal Error"});

            res.status(200).send({message: "Deleted"})
        });

    })
}

function insertMaterial(req, res){
    let id_product = req.params.id_product;
    let id_material_ = req.body.id_material;
    let cant = req.body.cant;

    if(id_material_==null || id_material_==""){
        return res.status(404).send({
            message:"material not found"
        });
    }

    Product.findById(id_product, (err, product)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        product.product_materials.forEach((act) => {
            if(act.id_material==id_material_){
                product.product_materials.splice(product.product_materials.indexOf(act),1)
            }
        });
    
        product.product_materials.push({id_material: id_material_, quantity:cant});

        product.save((err,productSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({message: "Inserted"})
        });
    });
}

function updateProduct(req, res){
    let id_product = req.params.id_product;
    let update = req.body

    Product.findByIdAndUpdate(id_product,update,(err,productUp)=>{
        if (err) return res.status(500).send({message:"Error al actualizar, verificar datos"});
        res.status(200).send({message:"Updated"});
    });
}

module.exports={
    insertNewProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    insertMaterial,
    updateProduct
}