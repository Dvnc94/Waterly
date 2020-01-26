var express = require('express');
var apiRoutes = express.Router();

var showerRoutes = require('./shower/showerRoutes');
apiRoutes.use('/shower', showerRoutes);

var oralHygieneRoutes = require('./oralHygiene/oralHygieneRoutes');
apiRoutes.use('/oral', oralHygieneRoutes);

var analyticsRoutes = require('./analytics/analyticsRoutes');
apiRoutes.use('/analytics', analyticsRoutes);

module.exports = apiRoutes;