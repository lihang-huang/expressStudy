var express = require('express');
var load = express.Router();
var connection = require('../models/config');

//请求数据至这里
load.post('/', function(req, res, next) {
    var sql = "SELECT * FROM news_item WHERE tab = '" + req.body.tab + "' ORDER BY news_time DESC";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            throw err;
        }
        res.json(rows);
        //connection.end();
    });
    // connection.end();
});
module.exports = load;
