var Chance = require('chance');

var chance = new Chance();

function generateUser() {
  return {
    userID: Math.floor(Math.random() * 1000000),
    name: chance.name(),
    age: chance.age(),
    gender: chance.gender(),
    location: chance.city(),
    twitter: chance.twitter()
  };
}

module.exports = generateUser;