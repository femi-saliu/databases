var models = require('../models');
var bluebird = require('bluebird');
var url = require('url');
var app = require('../app.js');



module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // ask models/index.js to get messages from the db
      // res.end(data from db)
      console.log(req);
      models.messages.get(req.body.roomname, function(results){
        res.status(200).json(results).end();
      });
    },
    post: function (req, res) { // a function which handles posting a message to the database
      // parse url for roomname
      console.log(req);
      // call model's post method with roomname
      models.messages.post(req.body.username, req.body.text, req.body.roomname, function(){
          res.status(201).end();
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

