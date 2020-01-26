var express = require('express');
var showerRoutes = express.Router();

var Shower = require('./showerModel');

// Add a shower
showerRoutes.post('/', (req, res) => {
    var userId = req.body.id;
    var duration = req.body.duration;

    Shower.addShower(userId, duration)
    .then(response => {
        res.status(200).send("<h1>Added shower :)</h1>");
    })
    .catch(error => {
        res.status(500).send("<h1>Error adding shower :(</h1>")
    })
});



module.exports = showerRoutes;