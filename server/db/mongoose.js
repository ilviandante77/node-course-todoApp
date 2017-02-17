var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp').then(()=>{
  console.log('Conneted to db TodoApp');
  // setTimeout(()=>{
  //   mongoose.connection.close();
  // }, 1000);
},(e)=>{
  console.log('Unable to connect', e);
});

module.exports = {mongoose};
