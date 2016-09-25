var express = require('express');
var router = express.Router();
var connection = require('../models/config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index'); //渲染index.ejs
});

router.get('/test',function(req,res,next){
    res.render('test');
});

router.post('/file',function(req,res,next){
    console.log(req);
});

//百度页面请求数据
router.post('/getNews', function(req, res, next) {
    //写sql语句
    var sql = "SELECT * FROM news_item WHERE tab = '" + req.body.tab + "' ORDER BY news_time DESC";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            throw err;
        }
        // var x = JSON.stringify(rows);
        res.json(rows);
        //connection.end();
    });
    //connection.end();
});

module.exports = router;
