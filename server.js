var bodyParser = require('body-parser')
var express = require('express')
var path = require('path');

const app = express();
var PORT = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: false }))
 
// application/json
app.use(bodyParser.json())

require('./applications/routes/api-route.js')(app);
require('./applications/routes/html-route.js')(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})