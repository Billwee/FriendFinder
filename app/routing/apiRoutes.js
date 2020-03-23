var path = require('path');

var array = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    return res.json(array);
  });

  app.post('/api/friends', function(req, res) {
    // array.push(req.body);
    // console.log(req.body);
    // console.log(array);
    // res.json('sdfsdfsd');

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
