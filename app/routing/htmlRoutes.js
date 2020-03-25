var path = require('path');

// Routes for the survey and a catch-all that brings you
// to the home page if anything else is entered
module.exports = function(app) {
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
