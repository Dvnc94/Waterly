var express = require('express');
var apiRoutes = express.Router();

var showerRoutes = require('./shower/showerRoutes');
apiRoutes.use('/shower', showerRoutes);

module.exports = apiRoutes;