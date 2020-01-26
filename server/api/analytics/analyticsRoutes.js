var express = require('express');
var analyticsRoutes = express.Router();

var Analytics = require('./analyticsModel');

analyticsRoutes.get('/:id/total', (req, res) => {
    Analytics.getTotalUsage(req.params.id) 
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

module.exports = analyticsRoutes;