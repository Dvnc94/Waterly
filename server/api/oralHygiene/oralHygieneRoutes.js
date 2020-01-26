var express = require('express');
var oralRoutes = express.Router();

var OralHygiene = require('./oralHygieneModel');

oralRoutes.post('/teeth', (req, res) => {
    var userID = req.body.id;

    OralHygiene.addToothBrush(userID)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

module.exports = oralRoutes;