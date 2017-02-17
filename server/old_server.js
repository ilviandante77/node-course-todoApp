var {mongoose} = require ('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');


var newTodo = new Todo({
  text: 'this is fantastic',

});

newTodo.save().then((tipo)=>{
  console.log(JSON.stringify(tipo, undefined, 2));
},(e)=>{
  console.log('Unable to save todo', e);
});

var newUser = new User({
  user: 'Tony Perotta',
  email: 'tony.perotta@gmail.com   '
});

newUser.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
  console.log('Unable to save User', e);
});
