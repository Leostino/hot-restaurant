var bodyParser = require('body-parser')
var express = require('express')
var path = require('path');

const app = express();
var PORT = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: false }))
 
// application/json
app.use(bodyParser.json())

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})