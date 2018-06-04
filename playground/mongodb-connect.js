const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/local' , (err, client) => {
  if(err){
    return console.log('Error while connecting to local MongoDB server');
  }
  console.log('Connected to MongoDB server successfully!');
  const db = client.db('local');

  // db.collection('Todos').insertOne({
  //   text: 'Pij dosta vode',
  //   completed: false
  // },undefined, (err, result) => {
  //   if(err){
  //     return console.log('Failed inserting document into collection',err);
  //   }
  //   console.log('Sucessfully inserted document into Todos collection');
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Nikola',
  //   age: 22,
  //   location: 'Belgrade'
  // },undefined, (err, result) => {
  //   if(err){
  //     return console.log('Failed inserting document into collection',err);
  //   }
  //   console.log('Sucessfully inserted document into Todos collection');
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  //
  // client.close();

});
