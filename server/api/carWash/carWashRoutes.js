var express = require('express');
var carWashRoutes = express.Router();

var CarWash = require('./carWashModel');

carWashRoutes.post('/', (req, res) => {
    var id = req.body.id;
    
    CarWash.addCarWash(id)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

module.exports = carWashRoutes;