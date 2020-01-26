var express = require('express');
var washHandsRoutes = express.Router();

var WashHands = require('./washHandsModel');


washHandsRoutes.post('/', (req, res) => {
    var userId = req.body.id;

    WashHands.addWashHands(userId)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

module.exports = washHandsRoutes;