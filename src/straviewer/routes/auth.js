var express = require('express');
var router = express.Router();

router.get('/get_authorize_url', function(req, res, next) {
  //TODO format/parametrize URL and redirect_url
  var clientId = process.env.STRAVA_CLIENT_ID;
  res.json({
    url: 'https://www.strava.com/oauth/authorize' +
         '?client_id=' + clientId +
         '&redirect_uri=http://localhost:3000/auth&response_type=code',
  });
});


module.exports = router;
