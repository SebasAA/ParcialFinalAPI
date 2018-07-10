'use strict'

const Material = require('../models/materialModel');

function getAllMaterials(req, res) {
    Material.find({}, (err, materials) => {
        if (err) return res.status(500).send({ message: `Internal Server Error ${err}`})
        if (!materials) return res.status(403).send({ message: 'No materials were found'})

        res.status(200).send(materials)
    })
}

function insertMaterial(req, res){
    let material = Material(req.body)
    material.save((err, materialStg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        res.status(200).send("Material inserted successfully");
    });

}

function getMaterial(req, res){
    let MaterialId = req.params.MaterialId
    Material.findById(MaterialId, (err,material)=>{
        if(err) return res.status(500).send({message:`Internal Server Error ${err}`});
        if(!material) return res.status(403).send({message:"Not found"});

        res.status(200).send(material);
    });
}

function updateMaterial(req, res){
    let MaterialId = req.params.MaterialId;
    let update = req.body;

    Material.findByIdAndUpdate(MaterialId, update, (err,materialUpdated) => {
        if(err) return res.status(500).send({message:"Internal Server Error"});
        res.status(200).send("Material updated successfully")
    });
}

function deleteMaterial(req, res){
    let MaterialId = req.params.MaterialId;

    Material.findByIdAndRemove(MaterialId, (err, materialStg)=>{
        if(err) return res.status(500).send({message:"Internal Server Error."});

        res.status(200).send("Material removed successfully")
    });
}

module.exports = {
    getAllMaterials,
    insertMaterial, 
    getMaterial, 
    updateMaterial,
    deleteMaterial
}