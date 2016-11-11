var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var a = req.query.a ? req.query.a : 0;
  var b = req.query.b ? req.query.b : 0;
  a = parseInt(a);
  b = parseInt(b);
  console.log(a, b);
  console.log(a + b);
  res.send(200, a + b);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
