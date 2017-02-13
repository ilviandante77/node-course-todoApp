
      //Impostazione di una costante in modo normale
// const MongoClient = require('mongodb').MongoClient;

      //Impostazione di più costanti con l'object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Mongodb sever');
  }
  console.log('Connected to Mongodb server');

  //deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });


  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });


  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
  //   console.log(result);
  // });

    // db.collection('Users').deleteMany({name: 'Alba'}).then((result)=>{
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('58a01995cfafe20e6494aa29')
    }).then((result)=>{
      console.log(result);
    });

  db.close();
});
