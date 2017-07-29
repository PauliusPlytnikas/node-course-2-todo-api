//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to MongoDB server');
}
  console.log('Connected to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

//collection nurodo direktorijos pavadinimą
//insertOne reikalauja(objekto,callbacko)
  // db.collection('Users').insertOne({
  //   name: 'Paulius',
  //   age: 22,
  //   location: 'Lithuania'
  // }, (err, result) =>{//callbackas
  //   if(err) {//kai erroras
  //     return console.log('Unable to insert todo', err);
  //   }//kai resultatas
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // })



  db.close();
});
