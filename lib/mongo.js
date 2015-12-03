var mongodb = require('mongodb');

var collection;

module.exports.init = function(callback) {
  var server = new mongodb.Server('localhost', 27017);
  var db = new mongodb.Db('GroupChallenge', server);
  db.open(function(error, db) {
    collection = db.collection('users');
    callback(error);
  });
};

module.exports.insert = function(data, callback) {
  collection.insertMany(data, function(err, result) {
    if(err !== null) {
      throw err;
    }
    callback(result);
  });
};

module.exports.delete = function(userID, callback) {
  collection.deleteOne({ userID: userID }, function(err, result) {
    if(err !== null) {
      throw err;
    }
    callback(result);
  });
};