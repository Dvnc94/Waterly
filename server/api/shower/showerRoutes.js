var express = require('express');
var showerRoutes = express.Router();

var Shower = require('./showerModel');

// Add a shower
showerRoutes.post('/', (req, res) => {
    var userId = req.body.id;
    var duration = req.body.duration;

    Shower.addShower(userId, duration)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});



module.exports = showerRoutes;