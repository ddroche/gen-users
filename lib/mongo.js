var mongodb = require('mongodb');

var collection;

var server = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('GroupChallenge', server);

db.open(function(error, db) {
  if(error !== null) {
    throw error;
  }
  collection = db.collection('users');

});

module.exports.insert = function(data) {

  collection.insertMany(data, function(err) {
    if(err !== null) {
      throw err;
    }
  });

};

module.exports.delete = function(userID) {

  collection.deleteOne({ userID: parseInt(userID) }, function(err, result) {
    if(err !== null) {
      throw err;
    }
  });
};