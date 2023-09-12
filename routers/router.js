
let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');


router.post('/', (req,res)=>{
    controller.addCity(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllCities(req,res);
});

router.delete('/', (req,res)=>{
    controller.deleteCity(req,res);
});


module.exports = router;