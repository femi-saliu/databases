var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host: 'localhost', // MKS-LA-7.local
  user: 'root',
  password: '',
  database: 'chat',
  multipleStatements: true
});


module.exports = {
  storeMessage: function(username, text, roomname, callback){
    var query = "INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?);";
    var queryVals = [username, text, roomname];
    queryDB(query, function(result){
      console.log("message storage successful ",result);
      callback(result);
    }, queryVals);
  },
  getMessages: function(roomname, callback){
    var room = roomname || 'lobby';
    // var query = "SELECT username, message, roomname FROM messages WHERE roomname="+room+";";
    var query = "SELECT objectId, username, message, roomname FROM messages;";
    queryDB(query, function(result){
      console.log("message retrieval successful ",result); // eventually return result
      callback(result);
    });
  }
};

var queryDB = function(queryString, callback, values){
  // connection.connect();
  connection.query(queryString, values, function(error, result){
    if (error){throw error;}
    console.log(result);
    callback(result);
  });
  // connection.end(function(error){
  //   if (error){throw error;}
  //   console.log("Interaction complete.");
  // });
};

