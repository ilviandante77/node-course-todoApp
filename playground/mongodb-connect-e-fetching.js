      //Impostazione di una costante in modo normale
// const MongoClient = require('mongodb').MongoClient;

      //Impostazione di più costanti con l'object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Mongodb sever');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58a01d66744ca5cf5dee8c41')
  // }).toArray().then((docs)=>{
  //   console.log(`Todos`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Alba'}).count().then((count)=>{
    console.log(`Users count: ${count}`);
  }, (err)=>{
    console.log('Unable count Users', err);
  });

  db.close();
});
