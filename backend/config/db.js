const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employeeSystem',
    port: '3306'
});

con.connect(function (error) {
    if (error) console.log(error);
    else console.log("connected");
});

module.exports = con;