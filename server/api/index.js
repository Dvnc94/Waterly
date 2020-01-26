var express = require('express');
var apiRoutes = express.Router();

var showerRoutes = require('./shower/showerRoutes');
apiRoutes.use('/shower', showerRoutes);

var oralHygieneRoutes = require('./oralHygiene/oralHygieneRoutes');
apiRoutes.use('/oral', oralHygieneRoutes);

var carWashRoutes = require('./carWash/carWashRoutes');
apiRoutes.use('/carwash', carWashRoutes);

var washHandsRoutes = require('./washHands/washHandsRoutes');
apiRoutes.use('/washhands', washHandsRoutes);

var analyticsRoutes = require('./analytics/analyticsRoutes');
apiRoutes.use('/analytics', analyticsRoutes);

module.exports = apiRoutes;