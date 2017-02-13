
      //Impostazione di una costante in modo normale
// const MongoClient = require('mongodb').MongoClient;

      //Impostazione di più costanti con l'object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Mongodb sever');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   comlpleted: false
  //   },(err, result)=>{
  //     if(err){
  //       return console.log('Unable to insert todo', err);
  //     }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Alba',
  //   age: 33,
  //   location: {
  //     via: 'Guadagnini',
  //     civico: 32,
  //     city: 'Brescia'},
  //   }, (err, result)=>{
  //     if(err){
  //       return console.log('Unable to insert User', err);
  //     }
  //     // console.log(JSON.stringify(result.ops, undefined, 2));
  //     console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
