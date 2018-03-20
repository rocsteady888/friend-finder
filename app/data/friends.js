// Constructor function
function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

// Startup Data
// ============================================
const friends = [
  new Friend("John", "", [1,3,4,2,1,3,1,3,2,3]),
  new Friend("Jim", "", [3,1,5,2,1,2,5,2,4,1]),
  new Friend("Ben", "", [5,1,4,3,1,2,4,1,4,2]),
  new Friend("Andy", "", [1,3,2,3,4,2,5,2,3,1]),
  new Friend("Kyle", "", [5,1,2,3,4,5,1,3,4,1]),
  new Friend("Aiden", "", [3,1,5,4,3,5,6,4,5,3]),
  new Friend("Joe", "", [1,1,4,3,5,4,1,2,5,5])
]

const matchedFriends = [];

module.exports = {
  friends: friends,
  matchedFriends: matchedFriends,
  add: function(f) {
    friends.push(new Friend(f.name, f.photo, f.scores));
  },
  match: function(f) {
    matchedFriends.assign(new Friend(f.name, f.photo, f.scores));
  }
}
