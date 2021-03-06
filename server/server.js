var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, resp)=>{
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text,
  });
   todo.save().then((doc)=>{
      resp.send(doc);
   },(e)=>{
     resp.status(400).send(e);
   });
});

app.listen(3000, ()=>{
  console.log('Server start on port 3000');
});
