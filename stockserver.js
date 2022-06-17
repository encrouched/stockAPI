// PROMPT:
// How would you call this API in JavaScript / Node?
// What objects or services would you create to expedite iterative development?
// What considerations come to mind for security and scalability of your solution?
//
// Write your code below. Be prepared to explain your solution and architecture decisions.
// Please note you will not be judged on compilation or syntax.

const express = require('express')
const app = express()

const https = require('https');
const querystring = require('querystring');

app.get('/exchange/:function/:from_currency/:to_currency', function(req, res){
  const parameters = {
    function: req.params.function,
    from_currency: req.params.from_currency,
    to_currency: req.params.to_currency,
    apikey: 'ZHSYTS2M8BWVLK7Y'
  }
   const request_args = querystring.stringify(parameters);
   var request = https.request({
    host: 'www.alphavantage.co',
    path: '/query?' + request_args,
    method: 'GET',
    headers: {
      'Accept': 'application/json;charset=UTF-8'
    }
  }, res2 => res2.on('data', d => res.send(d)))
  request.end()
});

 app.listen(3000)
