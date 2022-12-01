const mysql =require('mysql')
config = {
    connectionLimit: 50,
    host: "localhost",
    user: "root",
    password: '',
    database: "computer",
    multipleStatements: true
  };
  
  var db = mysql.createPool(config);
module.exports=db;

