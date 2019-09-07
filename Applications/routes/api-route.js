
​
var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitlist-data.js');
​
module.exports = function (app) {
    app.get('/api/tables', function(req, res) {
        res.json(tableData);
    });
​
    app.get('/api/waitlist', function(req, res) {
        res.json(waitListData);
    });
​
    app.post('/api/tables', function(req, res)   {
        if(tableData.length < 5)    {
            tableData.push(req.body);
            res.json(true);
        } else  {
            waitListData.push(req.body);
            res.json(false);
        }
    });
​
    app.post('/api/clear', function()   {
        tableData = [];
        waitListData = [];
​
        console.log(tableData);
        console.log(waitListData);
    })
}