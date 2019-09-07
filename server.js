var express = require('express')
const app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api-route')(app);
require('./routes/html-route')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})