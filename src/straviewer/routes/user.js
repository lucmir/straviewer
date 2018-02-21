var express = require('express');
var axios = require('axios');
var querystring = require('querystring');

var router = express.Router();

router.get('/', async (req, res, next) => {
  authCode = req.query.code;
  try {
    const token = await getToken();
    res.json(token.data.athlete);
  } catch (e) {
    next(e);
  }
});


const getToken = () => {
  var clientId = process.env.STRAVA_CLIENT_ID;
  var clientSecret = process.env.STRAVA_CLIENT_SECRET;
  console.log(clientId);
  console.log(clientSecret);

  return axios.post(
    'https://www.strava.com/oauth/token',
    querystring.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: authCode
    })
  );
}

module.exports = router;
