var express = require("express");
var login = express.Router();//设置路由
var connection = require('../models/config');

//设置路由
login.get('/',function(req,res,next){
	res.render('login');//渲染模板 login.ejs
});


//检查账号登陆
login.post('/check',function(req,res,next){
	var sql = "SELECT * FROM login";
	connection.query(sql,function(err,rows,fields){
		if(err){
			throw err;
		}
		//验证结果
		var check = '0';//定义一个check变量
		for(var i=0;i<rows.length;i++){
			if(rows[i].account == req.body.account && rows[i].password == req.body.password){
				check = "1";//匹配上就check赋值1
				break;
			}
		}
		//返回一个json
		var result = {
			code:check,
			username:req.body.account
		}
		res.json(result);
	});
});

module.exports = login;