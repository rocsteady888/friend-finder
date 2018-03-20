const friends = require("../data/friends");

module.exports = function(app) {
// Search for specific friends (or all friends) - provides JSON
app.get("/api/:friend?", function(req, res) {
  const chosen = req.params.reservation;
  if (chosen) {
    console.log(chosen);
  }
  else {
      res.json(friends);
  }
});

app.post("/api/friends", function(req, res) {

  // req.body is equal to the JSON data sent with the post request
  // This is what the body-parser middleware does for us
  req.body.scores = req.body.scores.split('').map(Number);
  res.json(req.body);
  // console.log(friends.friends);
  var totalDifference = [];
    var a = req.body.scores,
      b = friends.friends
    for (i = 0; i < friends.friends.length; i++) {
      var x = a.map(function(item, index) {
        // In this case item correspond to currentValue of array a,
        // using index to get value from array b
        return Math.abs(item - b[i].scores[index]);
      })
      // console.log(x);
      var sum = x.reduce(add, 0);
      function add(a,b) {
        return a + b;
      }
      totalDifference.push(sum);
    }
    // console.log(totalDifference);
    var minNumber = totalDifference.indexOf(Math.min.apply(Math, totalDifference));
    // console.log(minNumber);
    var match = friends.friends[minNumber];
    console.log(match);
    friends.matchedFriends.push(match);
    friends.add(req.body);
});
};
