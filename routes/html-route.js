var path = require('path');
module.exports = function (app) {
    app.get('/table', function(req, res) {
        res.sendFile(path.join(__dirname , '../html/table.html'));
});
app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname , '../html/reserve.html'));
});
app.use( function(req, res) {
    res.sendFile(path.join(__dirname , '../html/table.html'));
});
}