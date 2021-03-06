var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');
var app = express();

// Allow dev env to make back-end API calls
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Running on port " + PORT);
});