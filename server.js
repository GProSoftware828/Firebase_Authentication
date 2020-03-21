var express = require('express');
var logger = require('morgan'); //verbose
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extnded: false }));
app.use(logger('dev'));
app.get('/', function(request, response) {
  response.render('home.ejs');
});
app.post('/', function(request, response) {
  console.log(request.body.drink);
  response.render('results.ejs', {
    data: request.body.drink
  });
});
var port = process.env.PORT || 2;
app.listen(port, function() {
  console.log('App running on port ' + port);
});
