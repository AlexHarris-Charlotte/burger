const connection = require('./connection.js');

// This page is used to contact our database and retrieve information
// The returned data is stored in (results)
// We then can use the results in a callback function cb

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


const orm = {
    selectAll: function(table, cb) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
        });
    },
 
    insertOne: function(table, column, value, cb) {
        console.log(value);
        const queryString = `INSERT INTO ${table} (${column}) VALUES (?)`;
        console.log(queryString);
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;
            cb(result);
        } 
    )},
    updateOne: function(table, column, value, cb) {
        let queryString = `UPDATE ${table} SET Devoured = 1 WHERE (${column}) VALUES (?) `;

    
        console.log(queryString);
        connection.query(queryString, value, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}

module.exports = orm;