var path = require('path');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
