const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
  if(err){
    return console.log('Error while connecting to local MongoDB server');
  }
  console.log('Connected to MongoDB server successfully!');
  const db = client.db('TodoApp');

  db.collection('Users').find({
    name:'Sava'
  }).toArray().then((docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs,undefined,2));
  }).catch((err) => {
    console.log('Unable to fetch users',err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log(`Users count: ${count}`);
  }).catch((err) => {
    console.log('Unable to count todos',err);
  });
  //client.close();
});
