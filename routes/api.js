var express = require('express');
var router = express.Router();

var mongo = require('../lib/mongo');
var generateUser = require('../lib/generateUser');

/* GET users listing. */
router.get('/users', function(req, res, next) {

  var data = [];

  for (var i = 0; i < 20; i++) {
    data.push(generateUser());
  }

  res.send(data);

  mongo.insert(data);

});

router.delete('/users/:userID', function(req, res, next) {
  mongo.delete(req.params.userID);
  res.sendStatus(200);
});

module.exports = router;
