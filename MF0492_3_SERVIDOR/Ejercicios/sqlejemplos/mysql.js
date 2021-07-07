let mysql = require('mysql')

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "presta"
  });

  let sql = "SELECT * FROM usuario";

//Iniciamos la conexión
con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

//Cerramos la conexión
con.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });