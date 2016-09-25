var mysql = require('mysql'); //数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baidu_news'
});

module.exports = connection;