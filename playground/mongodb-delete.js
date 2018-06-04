const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
  if(err){
    return console.log('Error while connecting to local MongoDB server');
  }
  console.log('Connected to MongoDB server successfully!');
  const db = client.db('TodoApp');

  //deleteMany
    // db.collection('Todos').deleteMany({text: 'Napravi zdrala'}).then((result)=>{
    //   console.log(result);
    // });
  //deleteOne
    // db.collection('Todos').deleteOne({text: 'Napravi zdrala'}).then((result)=>{
    //   console.log(result);
    // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
  });
  //client.close();
});
