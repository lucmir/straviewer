var express = require('express');
var router = express.Router();

router.get('/get_authorize_url', function(req, res, next) {
  var redirectURI = req.query.redirect_uri;
  var clientId = process.env.STRAVA_CLIENT_ID;
  res.json({
    url: 'https://www.strava.com/oauth/authorize' +
         '?client_id=' + clientId +
         '&redirect_uri=' + redirectURI +
         '&response_type=code'
  });
});


module.exports = router;
