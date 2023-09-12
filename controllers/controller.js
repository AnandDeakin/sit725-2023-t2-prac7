
let collection = require('../models/model')

const addCity = (req,res) => {    
    let city = req.body;
    collection.addCity(city, (err,result) => {
        if(!err){
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllCities = (req,res) => {
    collection.getAllCities((err,result)=>{   
        if(!err){
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteCity = (req,res) => {    
    let city = req.body;
    collection.deleteCity(city, (err,result) => {
        if(!err){
            res.json({statusCode:400,data:result,message:'failure success'});
        }
    });
}



module.exports = {addCity,getAllCities,deleteCity}