const express = require("express");
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "presta"
});

let sql = 'SELECT * FROM usuario LIMIT 5';

app.get("/",(req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query(sql, (err, rows) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log('The data from users table are: \n', rows);
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});