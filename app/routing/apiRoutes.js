//Path the the data file containing all the friends
var array = require('../data/friends');

module.exports = function(app) {
  //GET that returns the array of objects in JSON format
  app.get('/api/friends', function(req, res) {
    return res.json(array);
  });

  // POST used to send the user data for comparing against the
  // database of potential matches. Then a forEach within a for
  // loop that calculates the best possible matching friend. Then
  // returning that friend object.
  app.post('/api/friends', function(req, res) {
    let compare = 40;
    let friend;
    array.forEach(element1 => {
      let sum = 0;

      for (let i = 0; i < req.body.scores.length; i++) {
        let diff;
        diff = req.body.scores[i] - element1.scores[i];
        diff = Math.abs(diff);
        sum += diff;
      }
      console.log(sum);
      if (sum < compare) {
        compare = sum;
        friend = element1;
      }
    });
    console.log(friend);
    res.json(friend);
  });
};
