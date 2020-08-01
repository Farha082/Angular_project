var express = require('express');
var app = express();
var router = express.Router();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.use('/',router);

app.listen(4000);