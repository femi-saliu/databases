var db = require('../db');




module.exports = {
  messages: {
    get: function (roomname, callback) {
      db.getMessages(roomname, function(result){
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (username, message, roomname, callback) {
      db.storeMessage(username, message, roomname, function() {
        callback();
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

