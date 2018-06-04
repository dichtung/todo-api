const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
  if(err){
    return console.log('Error while connecting to local MongoDB server');
  }
  console.log('Connected to MongoDB server successfully!');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    name: 'Srki'
  },{
    $set:{
      name: 'Srdjan'
    },
    $inc:{
      age: 1
    }
  },{
    returnOriginal:false
  }).then((retObj) => {
    console.log(retObj);
  });
  //client.close();
});
