
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))




/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get('/now', function(req, res, next) {
req.time = new Date().toString(); // Hypothetical synchronous operation
next();
}, function(req, res) {
res.send({time: req.time});
});


/** 9)  Get input from client - Route parameters */

app.get("/:word/echo", function(req, res) {
  var word = req.params.word;
  res.send({echo: word});
});


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

 app.get("/name", function(req, res) {
   var firstName = req.query.first;
   var lastName = req.query.last;
   res.send({ name: firstName+' '+lastName});
 });

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */

app.post('/name', function(req, res) {
  var firstName = req.body.first;
  var lastName = req.body.last;
  res.send({ name: firstName+' '+lastName});
});



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
