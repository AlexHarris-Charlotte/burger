// This page will use pass information to the ORM object and use it's methods
// Using the ORM methods, we can contact the database and retrieve data
// We can then use the retrieved data (res) within a callback function (cb)


const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(column, value, cb) {
      console.log("col", column, 'val', value)
      orm.insertOne("burgers", column, value, function(res) {
        cb(res);
      });
    },
    // update: function(itemToUpdate, cb) {
    //   orm.updateOne("burgers", itemToUpdate, function(res) {
    //     cb(res);
    //   });
    // }
};


module.exports = burger;
// need to export at end of burger file