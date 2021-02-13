const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'zotmvjakstp1!',
    database:'casperDB'
});

module.exports = mysql;
