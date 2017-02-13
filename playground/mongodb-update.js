
      //Impostazione di una costante in modo normale
// const MongoClient = require('mongodb').MongoClient;

      //Impostazione di più costanti con l'object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Mongodb sever');
  }
  console.log('Connected to Mongodb server');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58a017be08ef5a0e19d0c6ba')
  }, {
    $set: {name: 'Alba'},
    $inc: {age: 2}
  },{
      returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })

  db.close();
});
