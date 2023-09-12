
let client = require('../dbConnection');
let collection = client.db().collection('city');


function addCity(city,callback) {
    collection.insertOne(city,callback);
}

function getAllCities(callback){
    collection.find({}).toArray(callback);
}

function deleteCity(city,callback) {
    collection.deleteOne(city,callback);
}

module.exports = {addCity,getAllCities,deleteCity}