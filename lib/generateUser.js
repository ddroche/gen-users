var chance = require('chance');

function generateUser() {
  var user = {
    userID: Math.floor(Math.random() * 1000000),
    name: chance.name(),
    age: chance.age(),
    gender: chance.gender(),
    location: chance.city(),
    twitter: chance.twitter()
  }

  return user;
}

module.exports = generateUser;