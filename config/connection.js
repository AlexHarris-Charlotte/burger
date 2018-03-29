const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   port     : 3306, 
//   user     : 'root',
//   password : 'root',
//   database : 'Burger_db'
// });

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "Burger_db",
    });
};
module.exports = connection;
 

 
