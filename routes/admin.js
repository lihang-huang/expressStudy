var express = require('express');
var router = express.Router();
var connection = require('../models/config');
var multipart = require('connect-multiparty');
var m = multipart(); //文件流中间件
var fs = require('fs');

//添加一个特殊字符转义函数
function htmlspecialchars(str) {
    var s = "";
    if (str.length == 0) return "";
    for (var i = 0; i < str.length; i++) {
        switch (str.substr(i, 1)) {
            case "<":
                s += "&lt;";
                break;
            case ">":
                s += "&gt;";
                break;
            case "&":
                s += "&amp;";
                break;
            case " ":
                if (str.substr(i + 1, 1) == " ") {
                    s += " &nbsp;";
                    i++;
                } else s += " ";
                break;
            case "\"":
                s += "&quot;";
                break;
            case "\n":
                s += "<br>";
                break;
            default:
                s += str.substr(i, 1);
                break;
        }
    }
    return s;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin');
});

//删除新闻
router.post('/delete', function(req, res, next) {
    var sql = "DELETE FROM news_item WHERE news_id = '" + req.body.id + "'";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            throw err;
        }
        res.send("删除成功！");
        //connection.end();
    });
});


//添加新闻
router.post('/addnews', m, function(req, res, next) {
    //配置一个整合文件
    var sqlData = Object.create(req.body); //继承req.body

    //循环输出图片文件
    for (var i = 0; i < req.files.img.length; i++) {
        if (req.files.img[i].name != '') {
            //只有上传了图片文件的才执行
            sqlData["img" + (i + 1)] = "/images/" + req.files.img[i].name;
            var tem_path = req.files.img[i].path;
            var target_path = './public/images/' + req.files.img[i].name;
            fs.rename(tem_path, target_path, function(err) {
                if (err) throw err;
                console.log("第" + i + "张图片: 上传成功！");
                fs.unlink(tem_path, function() {
                    if (err) throw err;
                    console.log("删除缓存");
                });
            });
        } else {
            sqlData["img" + (i + 1)] = req.files.img[i].name;
        }
    }

    var sql = "INSERT INTO news_item (news_title,news_time,news_cart,img_address1,img_address2,img_address3,tab) VALUES ('" +
        htmlspecialchars(sqlData.newsTitle) + "','" + sqlData.addDate + "','" + htmlspecialchars(sqlData.newsCategory) + "','" +
        htmlspecialchars(sqlData.img1) + "','" + htmlspecialchars(sqlData.img2) + "','" +
        htmlspecialchars(sqlData.img3) + "','" + sqlData.newsTab + "')";
    console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            throw err;
        }
        res.send(req.body.newsTab);
        //connection.end();
    });
});

//修改新闻
router.post('/setnews',m, function(req, res, next) {
    //配置一个整合文件
    var sqlData = Object.create(req.body); //继承req.body

    //循环输出图片文件
    for (var i = 0; i < req.files.img.length; i++) {
        if (req.files.img[i].name != '') {
            //只有上传了图片文件的才执行
            sqlData["img" + (i + 1)] = "/images/" + req.files.img[i].name;
            var tem_path = req.files.img[i].path;
            var target_path = './public/images/' + req.files.img[i].name;
            fs.rename(tem_path, target_path, function(err) {
                if (err) throw err;
                console.log("第" + i + "张图片: 上传成功！");
                fs.unlink(tem_path, function() {
                    if (err) throw err;
                    console.log("删除缓存");
                });
            });
        } else {
            sqlData["img" + (i + 1)] = req.files.img[i].name;
        }
    }

    var sql = "UPDATE news_item SET news_title = '" + htmlspecialchars(sqlData.newsTitle) + "',news_cart = '" +
        htmlspecialchars(sqlData.newsCategory) + "',img_address1 = '" +
        htmlspecialchars(sqlData.img1) + "',img_address2 = '" + htmlspecialchars(sqlData.img2) + "',img_address3 = '" +
        htmlspecialchars(sqlData.img3) + "',news_time = '" + sqlData.addDate +
        "',tab = '" + sqlData.newsTab + "' WHERE news_id = '" + sqlData.newsId + "'";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            throw err;
        }
        res.send(req.body.newsTab);
        //connection.end();
    });
});


module.exports = router;
