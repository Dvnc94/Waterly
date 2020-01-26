var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

var apiRoutes = require('./api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send("<h1>This is QWER hacks back-end   </h1>");
})

app.listen(5000, () => {
    console.log("Running on port 5000");
});